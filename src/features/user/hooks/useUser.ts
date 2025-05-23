import { useQuery } from "@tanstack/react-query";
import { fetchUser } from "@/features/user/services/user.service";

export const useUser = () => {
  return useQuery({
    queryKey: ["user"],
    queryFn: fetchUser,
  });
};
