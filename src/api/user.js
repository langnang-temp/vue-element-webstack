import request from "@/plugins/axios";

export function login(data) {
  return request({
    url: "/vue-element-webstack/user/login",
    method: "post",
    data,
  });
}

export function getInfo(token) {
  return request({
    url: "/vue-element-webstack/user/info",
    method: "get",
    params: { token },
  });
}

export function logout() {
  return request({
    url: "/vue-element-webstack/user/logout",
    method: "post",
  });
}
