import { api } from "../core";

export const getPosts = async () => {
  const response = await api.get("/posts");
  return response.data;
};