import { usePosts } from '@/entities/post/model';
import { PostPreview } from '@/features/PostPreview';
import { Stack, Typography } from '@mui/material';

export const PostList = () => {
  const { data } = usePosts();

  return (
    <Stack spacing={2} mt={4}>
      <Typography variant="h4">Список постов</Typography>
      {data?.map(post => (
        <PostPreview key={post.id} post={post} />
      ))}
    </Stack>
  );
};
