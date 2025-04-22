import { Post } from '@/entities/post/model';
import { Card, CardContent, Typography, Button, Stack } from '@mui/material';
import Link from 'next/link';

export const PostPreview = ({ post }: { post: Post }) => (
  <Card>
    <CardContent>
      <Typography variant="h6">
        {post.id}. {post.title}
      </Typography>
      <Typography noWrap>{post.body}</Typography>
      <Stack direction="row" justifyContent="flex-end">
        <Link href={`/posts/${post.id}`}>
          <Button size="small">Просмотр</Button>
        </Link>
      </Stack>
    </CardContent>
  </Card>
);
