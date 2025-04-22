import { useQuery } from '@tanstack/react-query';

export type User = {
  id: number;
  name: string;
};

export const useUser = (id?: number) =>
  useQuery<User>({
    queryKey: ['user', id],
    queryFn: () =>
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(res => res.json()),
    enabled: Boolean(id)
  });
