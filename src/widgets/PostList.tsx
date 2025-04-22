'use client';

import { usePosts } from '@/entities/post/model';
import { PostPreview } from '@/features/PostPreview';
import { Stack, Typography, Pagination } from '@mui/material';
import { ErrorDialog } from '@/shared/ErrorDialog/ErrorDialog';
import { DefaultLoader } from '@/shared/DefaultLoader/DefaultLoader';
import { useDialogProps } from '@/shared/hooks/useDialogProps';
import { useState, useEffect } from 'react';

export const PostList = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, error } = usePosts(page);
  const errorDialog = useDialogProps();

  useEffect(() => {
    if (error) {
      errorDialog.open();
    }
  }, [error, errorDialog]);

  if (isLoading) return <DefaultLoader />;

  return (
    <>
      <Stack spacing={2} mt={4}>
        <Typography variant="h4">Список постов</Typography>
        {data?.map(post => (
          <PostPreview key={post.id} post={post} />
        ))}
        <Pagination count={10} page={page} onChange={(_, value) => setPage(value)} />
      </Stack>

      <ErrorDialog
        open={errorDialog.isOpened}
        onClose={errorDialog.close}
        message={error?.message || 'Неизвестная ошибка'}
      />
    </>
  );
};
