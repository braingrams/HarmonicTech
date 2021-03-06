/* eslint-disable react/jsx-props-no-spreading */
import { ChakraProvider } from '@chakra-ui/react';
import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import Layout from '../lib/layout';
import customTheme from '../lib/styles/customTheme';
import defaultSEOConfig from '../../next-seo.config';
import '../lib/styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ChakraProvider theme={customTheme}>
    <Head>
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
      />
      <link rel="icon" href="/harmonicfav.png" type="image/x-icon" />
    </Head>
    <DefaultSeo {...defaultSEOConfig} />
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </ChakraProvider>
);

export default MyApp;
