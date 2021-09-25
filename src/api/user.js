import request from "@/utils/request";

export function login(data) {
  return request({
    url: "/login",
    method: "post",
    data,
  });
}

export function register(data) {
  return request({
    url: "/login",
    method: "post",
    data,
  });
}

export function fetchUserInfo(data) {
  return request({
    url: "/info",
    method: "post",
    data,
  });
}
