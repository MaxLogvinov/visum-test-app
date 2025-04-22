import { useQuery } from '@tanstack/react-query';

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export const usePosts = () =>
  useQuery<Post[]>({
    queryKey: ['posts'],
    queryFn: () => fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json())
  });

export const usePost = (id: string | number) =>
  useQuery<Post>({
    queryKey: ['post', id],
    queryFn: () =>
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res => res.json()),
    enabled: !!id
  });
