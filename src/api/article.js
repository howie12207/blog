import request from "@/utils/request";

export function fetchArticles(params) {
  return request({
    url: "/article",
    method: "get",
    params,
  });
}

export function fetchArticle(id) {
  return request({
    url: `/article/${id}`,
    method: "get",
  });
}
