import { getResourse } from "@/lib/fetch";
import { useQuery } from "@tanstack/react-query";

const useUsersQuery = () => {
    return useQuery<IHomeUser[]>({
        queryFn: () => getResourse("/api/load-users"),
        queryKey: ["users"],
        // Staletime means, send query to the server only after 5 seconds after previous query
        // staleTime: 5000,
        onError: err => {
            // showMessageOnClient()
            console.log(err);
        },
    });
};

export default useUsersQuery;
