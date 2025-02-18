import Taro from "@tarojs/taro";
const apiHost = "http://localhost:3000";

async function request(url, method, params, data) {
  return new Promise((resolve, reject) => {
    // {aa:'11'} --> aa=11&bb=22
    if (params) {
      params = Object.keys(params)
        .map((key) => `${key}=${params[key]}`)
        .join("&");
    }
    Taro.request({
      url: `${apiHost}${url}${url.indexOf("?") > -1 ? "&" : "?"}${params}`,
      method: method,
      data: data,

      header: {
        "content-type": "application/json",
        authorization: "Bearer " + Taro.getStorageSync("token"),
      },
      success: function (res) {
        console.log(res);
        resolve(res);
      },
      fail: function (err) {
        console.log(err);
        reject(err);
      },
    });
  });
}
async function get(url, params) {
  return request(url, "GET", params, null);
}
async function post(url, data, params) {
  return request(url, "POST", params, data);
}

async function del(url, data, params) {
  return request(url, "delete", params, data);
}

export default { get, post, del };
