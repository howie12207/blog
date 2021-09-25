import request from "@/utils/request";

export function fetchSorts() {
  return request({
    url: "/sort",
    method: "get",
  });
}
