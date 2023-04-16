import axios from "axios";
import config from "./config";
export default axios.create({
  baseURL: config.SERVER_API_URL || "https://localhost:5001/api",
  headers: {
    "Content-Type": "application/json",
  },
});
