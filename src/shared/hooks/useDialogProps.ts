import { useCallback, useState } from 'react';

export function useDialogProps(initialValue = false) {
  const [isOpened, setIsOpened] = useState(initialValue);

  const open = useCallback(() => setIsOpened(true), []);
  const close = useCallback(() => setIsOpened(false), []);

  return {
    isOpened,
    open,
    close
  };
}
