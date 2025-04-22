import { queryClient } from '@/shared/api/queryClient';
import { QueryCacheNotifyEvent } from '@tanstack/react-query';

export const setupQueryClientErrorHandling = (showError: (msg: string) => void) => {
  queryClient.getQueryCache().subscribe((event: QueryCacheNotifyEvent) => {
    if (event.type === 'updated' && 'action' in event && event.action.type === 'error') {
      const error = event.action.error;
      const message = error instanceof Error ? error.message : 'Произошла ошибка запроса';
      showError(message);
    }
  });
};
