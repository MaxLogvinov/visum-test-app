'use client';

import { useParams } from 'next/navigation';
import PostDetailsPage from '@/pages/PostDetailsPage';
import { ErrorDialog } from '@/shared/ErrorDialog/ErrorDialog';
import { useDialogProps } from '@/shared/hooks/useDialogProps';
import { useEffect } from 'react';

export default function PostPage() {
  const params = useParams();
  const { isOpened, open, close } = useDialogProps();

  useEffect(() => {
    if (!params || typeof params.id !== 'string') {
      open();
    }
  }, [params, open]);

  if (!params || typeof params.id !== 'string') {
    return <ErrorDialog open={isOpened} onClose={close} message={'Неизвестная ошибка'} />;
  }

  return <PostDetailsPage id={params.id} />;
}
