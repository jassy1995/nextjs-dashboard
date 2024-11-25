import type { Metadata } from 'next';
import './globals.css';
import { inter } from '@/util/fonts';
import { ClientProvider } from '@/components/ClientProvider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Suspense } from 'react';
import Spinner from '@/components/global/Spinner';
import GoogleButtonProvider from '@/components/global/GoogleButtonProvider';

export const metadata: Metadata = {
  title: 'Buy Hub',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Buy Hub</title>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.ico" />
        <link
          href="https://static.zara.net/stdstatic/6.13.0/js/v2/68569.css"
          rel="stylesheet"
          type="text/css"
        ></link>
      </head>
      <body className={`${inter.className} antialiased bg-slate-150`}>
        <ClientProvider>
          <ToastContainer theme="dark" position="bottom-center" limit={1} />
          <Suspense fallback={<Spinner />}>
          <GoogleButtonProvider>
            {children}
          </GoogleButtonProvider>
          </Suspense>
        </ClientProvider>
      </body>
    </html>
  );
}
