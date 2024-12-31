import { useQuery, useMutation } from '@tanstack/react-query';
import http from "@/util/http";

export const useGetNewArrivals = ({limit}:any) => {
    return useQuery({
        queryKey: ['newArrivals', limit],
        queryFn: async () => {
            const res = await http.get(`/api/products/new-arrivals?limit=${limit}`);
            return res.data;
        },
    });
};
export const useGetTopSelling = ({limit} :any) => {
    return useQuery({
        queryKey: ['topSelling', limit],
        queryFn: async () => {
            const res = await http.get(`/api/products/top-selling?limit=${limit}`);
            return res.data;
        },
    });
};
export const useGetProduct = ({productId} :any   ) => {
    return useQuery({
        queryKey: ['product', productId],
        queryFn: async () => {
            const res = await http.get(`api/products/product/${productId}`,);
            return res.data;
        },
    });
};
