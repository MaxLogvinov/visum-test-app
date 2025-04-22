'use client';

import { usePost } from '@/entities/post/model';
import { useUser } from '@/entities/user/model';
import { Typography, Button, CircularProgress } from '@mui/material';
import Link from 'next/link';

export const PostDetailsPage = ({ id }: { id: string }) => {
  const { data: post, isLoading: postLoading } = usePost(id);
  const { data: user } = useUser(post?.userId);

  if (postLoading || !post) return <CircularProgress />;

  return (
    <>
      <Typography variant="h4" gutterBottom>
        {post.title}
      </Typography>
      <Typography>{post.body}</Typography>
      <Typography variant="subtitle2" gutterBottom>
        Автор: {user?.name}
      </Typography>
      <Link href="/">
        <Button variant="outlined">Назад</Button>
      </Link>
    </>
  );
};
