import Constants from "../constants";
import jwt from "jsonwebtoken";
import fetch from "isomorphic-unfetch";

export enum HttpProtocol {
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
  GET = "GET"
}

async function apiHelper(
  method: HttpProtocol,
  path: string,
  params: { [key: string]: any }
) {
  // TODO: This should not be static
  const accessToken = "supersecretapikey";
  const appToken = "encryptyourpayloadusingthistoken";

  let url = Constants.API_URL + path;
  let options: any = {
    method,
    headers: {
      "Access-Control-Allow-Credentials":true,
      Authorization: "Bearer " + accessToken,
    },
    mode :'cors',
    credentials: "include"
  };

  const payload = { _d: jwt.sign(params, appToken) };

  if (method === HttpProtocol.GET || method === HttpProtocol.DELETE) {
    const qs = Object.keys(params)
      .map(k => encodeURIComponent(k) + "=" + encodeURIComponent(params[k]))
      .join("&");
    if (qs) {
      url += "?" + qs;
    }
  } else if (method === HttpProtocol.POST || method === HttpProtocol.PUT) {
    const headers = {
      ...options.headers,
      "content-type": "application/json"
    };
    options = {
      ...options,
      headers,
      mode : "cors",
      credentials: "include",
      body: JSON.stringify(payload)
    };
  }

  return fetch(url, options);
}

const Api = {
  get: async (path: string, params: { [key: string]: any } = {}) =>
    apiHelper(HttpProtocol.GET, path, params),
  post: async (path: string, params: { [key: string]: any } = {}) =>
    apiHelper(HttpProtocol.POST, path, params),
  put: async (path: string, params: { [key: string]: any } = {}) =>
    apiHelper(HttpProtocol.PUT, path, params),
  del: async (path: string, params: { [key: string]: any } = {}) =>
    apiHelper(HttpProtocol.DELETE, path, params)
};

export default Api;
