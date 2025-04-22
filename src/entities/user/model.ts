import { useQuery } from '@tanstack/react-query';
import { API_URL } from '../constans';

export type User = {
  id: number;
  name: string;
};

export const useUser = (id?: number) =>
  useQuery<User>({
    queryKey: ['user', id],
    queryFn: () => fetch(`${API_URL}/users/${id}`).then(res => res.json()),
    enabled: Boolean(id)
  });
