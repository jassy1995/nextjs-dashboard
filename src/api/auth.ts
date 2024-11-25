import { useQuery, useMutation } from '@tanstack/react-query';
import http from '@/util/http';

export const useSignup = () => {
  return useMutation({
    mutationFn: (data:any) => {
      return http.post('/api/auth/signup/email', data);
    },
    retry: false,
  });
};

export const useLogin = () => {
  return useMutation({
    mutationFn: (data:any) => {
      return http.post('/api/auth/login/email', data);
    },
    retry: false,
  });
};

export const useLoginWithGoogle = () => {
  return useMutation({
    mutationFn: (data:any) => {
      return http.post('/api/auth/login/google', data);
    },
    retry: false,
  });
};

//   return useQuery({
//     queryKey: ['profile'],
//     queryFn: () => {
//       return http.get('/auth/profile');
//     },
//     enabled: false,
//     retry: false,
//   });
// };

// export const useUpdateAccount = () => {
//     return useMutation({
//       mutationFn: (data) => {
//         return http.patch(`/auth/profile`, data, {
//           headers: {
//             'Content-Type': 'multipart/form-data',
//             Accept: '*/*',
//           },
//         });
//       },
//     });
//   };

//   export const useChangePassword = () => {
//     return useMutation({
//       mutationFn: ({ currentPassword, newPassword }) => {
//         return http.post('/auth/password/change', { currentPassword, newPassword });
//       },
//     });
//   };
