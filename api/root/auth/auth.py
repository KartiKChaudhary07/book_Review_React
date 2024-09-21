from flask import request
from flask_jwt_extended import create_access_token
from flask_restful import Resource

from root.db import mdb

from root.general.commonUtilis import (
    bcryptPasswordHash,
    cleanupEmail,
    maskEmail,
    mdbObjectIdToStr,
    verifyPassword,
)
from root.general.authUtils import validate_auth
from root.static import G_ACCESS_EXPIRES


class Login(Resource):
    def post(self):
        data = request.get_json()

        # Add the validation logic using the marshmallow schema
        # ... code here

        email = data.get("email")
        password = data.get("password")

        userMeta = {
            "email": email,
            "password": password,
        }

        return login(userMeta, {})


def login(data, filter, isRedirect=True):
    email = cleanupEmail(data.get("email"))

    # Feel free to add any additional filter conditions here depending on your use case
    filter = {"email": email, "status": {"$nin": ["deleted", "removed", "suspended"]}}

    userDoc = mdb.users.find_one(filter)

    if not (userDoc and "_id" in userDoc):
        return {
            "status": 0,
            "cls": "error",
            "msg": "Invalid email id and password. Please try again",
        }

    userStatus = userDoc.get("status")

    if userStatus == "pending":
        return {
            "status": 0,
            "cls": "error",
            "msg": "Your Request is still pending, Contact admin for more info",
            "payload": {
                "redirect": "/adminApproval",
                "userMeta": userDoc,
            },
        }

    password = data.get("password")

    isUserExists = True if userDoc and "_id" in userDoc else False
    isDbPasswordMatch = (
        True
        if userDoc
        and ("password" in userDoc)
        and verifyPassword(userDoc["password"], password)
        else False
    )

    uid = mdbObjectIdToStr(userDoc["_id"])
    access_token = create_access_token(identity=uid, expires_delta=G_ACCESS_EXPIRES)

    payload = {
        "accessToken": access_token,
        "uid": uid,
        "redirectUrl": "/dashboard",
    }

    return {
        "status": 1,
        "cls": "success",
        "msg": f"Login successful. Please be patient, it will redirect automatically!",
        "payload": payload,
    }


class UserLogout(Resource):
    @validate_auth(optional=True)
    def post(self, suid, suser):
        content = request.get_json(silent=True)

        # Add the log out logic here
        # ... code here

        return {
            "status": 1,
            "cls": "success",
            "msg": "Logged out successfully!",
        }


def logLoginSessions(uid, user, isLoggedIn=False, tokens=None, extra={}):
    # Log the login session details here

    return {
        "status": 1,
        "cls": "success",
        "msg": "Success",
    }


class UserRegister(Resource):
    @validate_auth(optional=True)
    def post(self, suid, suser):
        input = request.get_json(silent=True)
        print('input: ', input)

        # Add the validation logic using the marshmallow schema
        # ... code here

        # Check if the user email already exists
        email = input["email"]
        currentUser = mdb.users.find_one({"email": email})

        if currentUser and "_id" in currentUser:
            maskedEmail = maskEmail(email)
            return {
                "status": 0,
                "cls": "error",
                "msg": f"Email ID ({maskedEmail}) already exists",
                "payload": {},
            }

        # New user, here we should cleanup the data
        # For example,
        # Email Field => Cleanup the email, remove any extra spaces, convert to lowercase, etc.
        # Password Field => Hash the password using bcrypt. Never store the password in plain text
        # Avatar URL => Check if the avatar URL is valid, if not, set a default avatar URL

        # Do the cleanup here
        email = input["email"]
        password = input["password"]
        newPassword = bcryptPasswordHash(password)
        avatarUrl = input.get("avatarUrl", "/avatar.svg")

        # If you would like to add any additional meta like browser details, IP address, etc.
        newUserBrowserMeta = {}

        newUser = {
            "email": email,
            "password": newPassword,
            "avatarUrl": avatarUrl,
            **newUserBrowserMeta,
            "status": "active",
        }

        # If you would like to customize the user id, you can do it here
        # newUser['_id'] = ... #customLogic goes here

        mdb.users.insert_one(newUser)

        # After the user is registered, you can send a welcome email, etc.
        # ... code here

        payload = {
            "ruid": newUser["_id"],
            "redirect": "/login",
        }
        # Let say if you want to redirect the user to the dashboard after registration
        # payload = {
        #     "redirect": "/dashboard",
        #     "userMeta": newUser,
        # }

        return {
            "status": 1,
            "cls": "success",
            "msg": "Congratulations! You have successfully registered. Please login to continue",
            "payload": payload,
        }


class ForgetPassword(Resource):
    @validate_auth(optional=True)
    def post(self, suid, suser):
        input = request.get_json(silent=True)
        email = input["email"]

        # Add the validation logic using the marshmallow schema
        # ... code here

        user = mdb.users.find_one({"email": email})

        # If the user is not found, return an error message
        if not (user and "_id" in user):
            return {
                "status": 0,
                "cls": "error",
                "msg": "User not found",
                "payload": {},
            }

        newPassword = input["newPassword"]
        hashedPassword = bcryptPasswordHash(newPassword)

        # For security reasons, you can set the default password to false
        # Feel free to add any additional meta like browser details, IP address, etc.
        # For logging purpose, If needed, maintain a separate collection for password reset requests
        mdb.users.update_one(
            {"_id": user["_id"]},
            {"$set": {"password": hashedPassword, "defaultPassword": False}},
        )

        return {
            "status": 1,
            "cls": "success",
            "msg": "Password reset email sent successfully",
            "payload": {},
        }
