import { useQuery } from '@tanstack/react-query';
import { API_URL } from '../constans';

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export const usePosts = (page: number = 1, limit: number = 10) =>
  useQuery<Post[]>({
    queryKey: ['posts', page],
    queryFn: () => fetch(`${API_URL}/posts?_page=${page}&_limit=${limit}`).then(res => res.json())
  });

export const usePost = (id: string | number) =>
  useQuery<Post>({
    queryKey: ['post', id],
    queryFn: () => fetch(`${API_URL}/posts/${id}`).then(res => res.json()),
    enabled: !!id
  });
