import { useQuery, useMutation } from '@tanstack/react-query';
import http from "@/util/http";

export const useGetReviews = ({limit} :any   ) => {
    return useQuery({
        queryKey: ['reviews', limit],
        queryFn: async () => {
            const res = await http.get(`api/reviews/latest?limit=${limit}`,);
            return res.data;
        },
    });
};
export const useCreateReview = ({productId, userId} :any   ) => {
    return useMutation({
        mutationKey: ['reviews', 'product', productId, userId],
        mutationFn: (data:any) => {
            return http.post(`api/reviews/comment/product/${productId}/user/${userId}`, data);
        },
    });
};