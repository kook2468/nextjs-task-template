import axios from "axios";

export const fetchUser = async () => {
  const response = await axios.get("/api/user");
  return response.data;
};
