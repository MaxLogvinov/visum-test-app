import '@/app/globals.css';
import { CssBaseline, Container } from '@mui/material';
import type { AppProps } from 'next/app';
import { ErrorProvider } from '@/shared/error/ErrorContext';
import { Providers } from '@/shared/providers/Providers';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ErrorProvider>
      <CssBaseline />
      <Providers>
        <Container maxWidth="md">
          <Component {...pageProps} />
        </Container>
      </Providers>
    </ErrorProvider>
  );
}
