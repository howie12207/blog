import request from "@/utils/request";

export function fetchComment(id) {
  return request({
    url: `/comment/${id}`,
    method: "get",
  });
}

export function createComment(data) {
  return request({
    url: "/comment",
    method: "post",
    data,
  });
}
