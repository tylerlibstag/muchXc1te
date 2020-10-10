import axios from "axios";

const instance = axios.create({
  baseURL: "https://aptreact-backend.herokuapp.com/",
});

export default instance;

