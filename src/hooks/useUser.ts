import { useQuery } from "@tanstack/react-query";
import { api } from "@/services/axios";

export function useUser(userId: string) {
  return useQuery({
    queryKey: ["user", userId],
    queryFn: async () => {
      const { data } = await api.get(`/users/${userId}`);
      return data;
    },
  });
}
