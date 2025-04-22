import { useRouter } from 'next/router';
import { usePost } from '@/entities/post/model';
import { useUser } from '@/entities/user/model';
import { useDialogProps } from '@/shared/hooks/useDialogProps';
import { ErrorDialog } from '@/shared/error/ErrorDialog';
import { DefaultLoader } from '@/shared/DefaultLoader/DefaultLoader';
import { useEffect } from 'react';
import { Button, Typography } from '@mui/material';

export default function PostPage() {
  const router = useRouter();
  const { query } = useRouter();
  const { isOpened, open, close } = useDialogProps();

  const postId = typeof query.id === 'string' ? query.id : null;

  const { data: post, isLoading: isPostLoading, error: postError } = usePost(postId ?? '');

  const { data: user, isLoading: isUserLoading, error: userError } = useUser(post?.userId);

  useEffect(() => {
    if (!postId || postError || userError) open();
  }, [postId, postError, userError, open]);

  if (!postId) {
    return (
      <ErrorDialog open={isOpened} onClose={close} message="Произошла ошибка, некорректный ID" />
    );
  }

  if (isPostLoading || isUserLoading) return <DefaultLoader />;

  if (!post || !user) return null;

  return (
    <>
      <Typography variant="h4" sx={{ pt: 4 }} gutterBottom>
        {post.title}
      </Typography>
      <Typography paragraph>{post.body}</Typography>
      <Typography variant="subtitle2" gutterBottom>
        Автор: {user.name}
      </Typography>
      <Button variant="outlined" onClick={() => router.back()}>
        Назад
      </Button>
      <ErrorDialog
        open={isOpened}
        onClose={close}
        message="Ошибка при загрузке данных поста или пользователя"
      />
    </>
  );
}
