import axios from "axios";

const service = axios.create({
  baseURL: "http://localhost:3001",
  timeout: 5000,
});

service.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.resolve(false);
  },
);

// response interceptor
service.interceptors.response.use(
  (response) => {
    const res = response.data;
    return res;
    // if (res.code !== 200) {
    //   return Promise.reject(new Error(res.message || "Error"));
    // } else {
    //   return res;
    // }
  },
  (error) => {
    console.log("err" + error);
    return Promise.resolve(false);
  },
);

export default service;
