import { useQuery } from "@tanstack/react-query";
//import { api } from "@/services/axios";
import { fetchUser } from "@/services/user.service";

// export function useUser(userId: string) {
//   return useQuery({
//     queryKey: ["user", userId],
//     queryFn: async () => {
//       const { data } = await api.get(`/users/${userId}`);
//       return data;
//     },
//   });
// }

export const useUser = () => {
  return useQuery({
    queryKey: ["user"],
    queryFn: fetchUser,
  });
};
