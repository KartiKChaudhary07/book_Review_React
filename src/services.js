import { _get, _post } from "./utils/http";

export const getCurrentUserService = () => {
  return _get("/api/currentUser");
};

export const loginService = (data) => {
  return _post("/api/login", data);
};

export const registerService = (data) => {
  return _post("/api/register", data);
};
