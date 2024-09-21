from flask_restful import Resource
from root.db import mdb

from root.general.authUtils import validate_auth
from root.general.commonUtilis import strToMongoId


class CurrentUser(Resource):
    @validate_auth(optional=True)
    def get(self, suid=None, suser=None):
        if not suid:
            return {"status": 0, "msg": "Not logged in", "payload": {}}

        dbUsers = "users"
        data = mdb[dbUsers].find_one(
            {"$or": [{"_id": strToMongoId(suid)}, {"uid": suid}]}
        )

        if not (data and "_id" in data):
            return {"status": 0, "msg": "Not logged in"}

        userType = data.get("userType")

        avatarUrl = data.get("avatarUrl")

        fullName = data.get("fullName")

        user = {
            "fullName": fullName,
            "avatarUrl": avatarUrl,
            "userType": userType,
            "ruid": data.get("_id", ""),
            "email": data["email"] if "email" in data else "",
            "forceRedirectUrl": data.get("forceRedirectUrl", ""),
            "status": data.get("status"),
        }

        return {
            "status": 1,
            "msg": "Success",
            "payload": user,
        }
