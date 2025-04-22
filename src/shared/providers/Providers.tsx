import { ReactNode, useEffect } from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { queryClient } from '@/shared/api/queryClient';
import { useError } from '@/shared/error/ErrorContext';
import { setupQueryClientErrorHandling } from '@/shared/config/react-query-config';

export const Providers = ({ children }: { children: ReactNode }) => {
  const { showError } = useError();

  useEffect(() => {
    setupQueryClientErrorHandling(showError);
  }, [showError]);

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
