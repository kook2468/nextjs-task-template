import { api } from "@/shared/lib/axios";

export const fetchCommunityList = async () => {
  const response = await api.get("/community");
  return response.data;
};
