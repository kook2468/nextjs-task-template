import { api } from "@/services/axios";

export const fetchCommunityList = async () => {
  const response = await api.get("/community");
  return response.data;
};
