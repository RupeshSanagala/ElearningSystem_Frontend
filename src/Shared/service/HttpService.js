// import axios from "axios";

// // Create an instance of axios with a predefined base URL
// const HttpService = axios.create({
//   baseURL: "https://localhost:7206/api", // Base URL for the backend API
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// // Interceptors for request and response handling
// HttpService.interceptors.request.use(
//   (config) => {
//     // You can add authentication tokens or other custom headers here
//     console.log("Request Config: ", config);
//     return config;
//   },
//   (error) => {
//     console.error("Request Error: ", error);
//     return Promise.reject(error);
//   }
// );

// HttpService.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     console.error("Response Error: ", error);
//     return Promise.reject(error);
//   }
// );

// export default HttpService;

import axios from "axios";

const HttpService = axios.create({
  baseURL: "https://localhost:7206/api", // Set the base URL
  headers: {
    "Content-Type": "application/json",
  },
});

export default HttpService;
