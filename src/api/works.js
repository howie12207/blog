import request from "@/utils/request";

export function fetchWorks() {
  return request({
    url: "/works",
    method: "get",
  });
}

export function fetchWorksRecommend() {
  return request({
    url: "/works/recommend",
    method: "get",
  });
}
