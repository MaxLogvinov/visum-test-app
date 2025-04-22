import { usePosts } from '@/entities/post/model';
import { PostPreview } from '@/features/PostPreview';
import { Stack, Typography, Pagination } from '@mui/material';
import { ErrorDialog } from '@/shared/error/ErrorDialog';
import { DefaultLoader } from '@/shared/DefaultLoader/DefaultLoader';
import { useDialogProps } from '@/shared/hooks/useDialogProps';
import { useState, useEffect } from 'react';

export const PostList = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, error } = usePosts(page);
  const { isOpened, open, close } = useDialogProps();

  useEffect(() => {
    if (error) {
      open();
    }
  }, [error, open]);

  if (isLoading) return <DefaultLoader />;

  return (
    <>
      <Stack spacing={2} mt={4}>
        <Typography sx={{ alignSelf: 'center' }} variant="h4">
          Список постов
        </Typography>
        {data?.map(post => (
          <PostPreview key={post.id} post={post} />
        ))}
        <Pagination
          count={10}
          page={page}
          onChange={(_, value) => setPage(value)}
          size="small"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            mt: 2
          }}
        />
      </Stack>

      <ErrorDialog
        open={isOpened}
        onClose={close}
        message={error?.message || 'Неизвестная ошибка'}
      />
    </>
  );
};
