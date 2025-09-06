import axios from "axios";

const API = axios.create({
  baseURL: "https://13.49.226.206/api",
});
delete API.defaults.headers.common["Authorization"];
export default API;