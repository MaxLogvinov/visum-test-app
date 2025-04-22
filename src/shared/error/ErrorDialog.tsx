import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography
} from '@mui/material';

type ErrorDialogProps = {
  open: boolean;
  onClose: () => void;
  message: string;
};

export const ErrorDialog = ({ open, onClose, message }: ErrorDialogProps) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Произошла ошибка. Перезагрузите страницу.</DialogTitle>
      <DialogContent>
        <Typography>{message}</Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Закрыть</Button>
      </DialogActions>
    </Dialog>
  );
};
