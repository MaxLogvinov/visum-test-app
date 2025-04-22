import type { Metadata } from 'next';
import './globals.css';
import { ReactNode } from 'react';
import { CssBaseline, Container } from '@mui/material';

export const metadata: Metadata = {
  title: 'Список постов',
  description: 'Здесь могла быть ваша реклама'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <body>
        <CssBaseline />
        <Container maxWidth="md">{children}</Container>
      </body>
    </html>
  );
}
