import axios from "axios";

const API_URL = "https://fakestoreapi.com";

export default axios.create({
  baseURL: API_URL,
});
