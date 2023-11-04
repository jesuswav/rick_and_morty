import Head from 'next/head';
import ProviderAuth from '@hooks/useAuth';
import MainLayout from '@layout/MainLayout';
import '@styles/tailwind.css';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Rick and Morty</title>
        <link rel="shortcut icon" href="https://static.vecteezy.com/system/resources/previews/015/696/386/original/portal-in-space-to-other-universes-png.png" />
      </Head>
      <ProviderAuth>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </ProviderAuth>
    </div>
  );
}

export default MyApp;
