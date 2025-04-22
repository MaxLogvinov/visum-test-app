'use client';

import { usePost } from '@/entities/post/model';
import { useUser } from '@/entities/user/model';
import { Button, Typography } from '@mui/material';
import Link from 'next/link';
import { DefaultLoader } from '@/shared/DefaultLoader/DefaultLoader';
import { ErrorDialog } from '@/shared/ErrorDialog/ErrorDialog';
import { useDialogProps } from '@/shared/hooks/useDialogProps';
import { useEffect } from 'react';

const PostDetailsPage = ({ id }: { id: string }) => {
  const { isOpened, open, close } = useDialogProps();

  const { data: post, isLoading: isPostLoading, error: postError } = usePost(id);

  const { data: user, isLoading: isUserLoading, error: userError } = useUser(post?.userId);

  useEffect(() => {
    if (postError || userError) {
      open();
    }
  }, [postError, userError, open]);

  if (isPostLoading || isUserLoading) {
    return <DefaultLoader />;
  }

  if (!post || !user) return null;

  return (
    <>
      <Typography variant="h4" gutterBottom>
        {post.title}
      </Typography>
      <Typography paragraph>{post.body}</Typography>
      <Typography variant="subtitle2" gutterBottom>
        Автор: {user.name}
      </Typography>
      <Link href="/">
        <Button variant="outlined">Назад</Button>
      </Link>
      <ErrorDialog
        open={isOpened}
        onClose={close}
        message="Ошибка при загрузке данных поста или пользователя"
      />
    </>
  );
};

export default PostDetailsPage;
