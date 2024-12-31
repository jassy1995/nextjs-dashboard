'use client';

import React, { useState } from 'react';
import {MutationCache, QueryClient, QueryClientProvider} from '@tanstack/react-query';
import { NextUIProvider } from '@nextui-org/react';

export function ClientProvider({ children }: React.PropsWithChildren<{}>) {
  const [queryClient] = useState(() =>{
      const qc = new QueryClient({
          defaultOptions: {
              queries: {
                  staleTime: 1000 * 60 * 2,
              },
          },
          mutationCache: new MutationCache({
              onSuccess: async (_data:unknown, _variables:unknown, _context:unknown, mutation:any) => {
                  await qc.invalidateQueries({
                      queryKey: mutation.options.mutationKey,
                  });
              },
          }),
      })
      return qc;
  });


  return (
    <QueryClientProvider client={queryClient}>
      <NextUIProvider>{children}</NextUIProvider>
    </QueryClientProvider>
  );
}
