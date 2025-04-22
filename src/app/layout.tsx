import type { Metadata } from 'next';
import './globals.css';
import { ReactNode } from 'react';
import { CssBaseline, Container } from '@mui/material';
import { Providers } from '@/shared/providers/Providers';
import { ErrorProvider } from '@/shared/error/ErrorContext';

export const metadata: Metadata = {
  title: 'Список постов',
  description: 'Здесь могла быть ваша реклама'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <body>
        <ErrorProvider>
          <Providers>
            <CssBaseline />
            <Container maxWidth="md">{children}</Container>
          </Providers>
        </ErrorProvider>
      </body>
    </html>
  );
}
