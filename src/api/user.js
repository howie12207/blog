import request from "@/utils/request";
import { setToken } from "@/utils/auth";

export async function login(data) {
  const res = await request({
    url: "/login",
    method: "post",
    data,
  });
  if (res) setToken(res.token);
  return res;
}

export function register(data) {
  return request({
    url: "/register",
    method: "post",
    data,
  });
}

export function fetchUserInfo(data) {
  return request({
    url: "/info",
    method: "get",
    data,
  });
}

export function checkAwake() {
  return request({
    url: "/connect",
    method: "get",
  });
}
