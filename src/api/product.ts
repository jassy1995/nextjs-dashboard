import { useQuery, keepPreviousData, useMutation } from '@tanstack/react-query';
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
export const useGetFilterOptions = () => {
    return useQuery({
        queryKey: ['filterParams'],
        queryFn: async () => {
            const res = await http.get(`api/products/filter-params`,);
            return res.data;
        },
    });
};
export const useSearchProducts = ({setCursor, pageSize, query='all', style='any',rating='any', price='any', page=1, order='any', category='any', brand='any', cursor=null}:any) => {
    return useQuery({
        queryKey: ['searchedProducts', page,query,rating,price,order,category,brand,style],
        queryFn: async () => {
            const url = `/api/products/search`;
            const res = await http.post(url, {params:{query,rating,price,page,order,category,style,brand,pageSize,cursor}});
            setCursor(res.data.cursor);
            return res.data;
        },
        placeholderData:keepPreviousData,
    });
}