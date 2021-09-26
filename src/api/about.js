import request from "@/utils/request";

export function fetchAbout() {
  return request({
    url: "/about",
    method: "get",
  });
}
