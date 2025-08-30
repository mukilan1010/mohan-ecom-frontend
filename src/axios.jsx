import axios from "axios";

const API = axios.create({
  baseURL: "http://13.48.29.25:8080/api",
});
delete API.defaults.headers.common["Authorization"];
export default API;