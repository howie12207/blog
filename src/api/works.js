import request from "@/utils/request";

export function fetchWorks() {
  return request({
    url: "/works",
    method: "get",
  });
}
