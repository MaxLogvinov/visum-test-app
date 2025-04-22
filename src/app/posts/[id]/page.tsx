'use client';

import { useParams } from 'next/navigation';
import { PostDetailsPage } from '@/pages/PostDetailsPage';

export default function PostPage() {
  const params = useParams();

  if (!params || typeof params.id !== 'string') {
    return <div>Произошла ошибка. Перезагрузите страницу.</div>;
  }

  return <PostDetailsPage id={params.id} />;
}
