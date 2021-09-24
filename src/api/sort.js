import request from "@/utils/request";

export function fetchSort() {
  return request({
    url: "/sort",
    method: "get",
  });
}
