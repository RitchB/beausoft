import { Box } from '@chakra-ui/react';
import Head from 'next/head';
import { PropsWithChildren, useMemo } from 'react';
import Footer from './Footer';
import NavBar from './NavBar';

export default function Layout({
  pageTitle,
  children,
}: PropsWithChildren<{
  pageTitle?: string;
}>) {
  const title = useMemo(() => `${pageTitle ? `${String(pageTitle)} - ` : ''}beausoft`, [pageTitle]);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="beausoft" content="beausoft Services and Development" />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      <NavBar />
      <Box h='100%' w='100%' pt={20}>
        {children}
      </Box>
      <Footer />
    </>
  );
}
