import request from "@/plugins/axios";

export function selectMetaList(data) {
  return request({
    url: "/vue-element-webstack/meta/list",
    method: "post",
    data,
  });
}

export function selectMetaTree(data) {
  return request({
    url: "/vue-element-webstack/meta/tree",
    method: "post",
    data,
  });
}
