import axios from "axios";

export const github = axios.create({
  baseURL: process.env.REACT_APP_GITHUB_API_BASE_URL,
});
