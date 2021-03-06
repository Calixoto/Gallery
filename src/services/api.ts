import axios from "axios";

export const api = axios.create({
  baseURL: "https://mycelia.azure-api.net/",
  headers: {
    Auth: process.env.KEY_AUTH || "",
  },
});
