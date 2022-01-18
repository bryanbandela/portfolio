import Head from 'next/head';
import { useEffect, useState } from 'react';
import Loader from '../components/Loader';
import Content from '../components/Content';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <Head>
        <title>Bryan Bandela</title>
        <meta name="description" content="Bryan Bandela's Website portfolio" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      {loading ? <Loader /> : <Content />}
    </>
  );
}

export async function getServerSideProps() {
  console.log('Here is the process', process.env.NEXT_PUBLIC_API_URL);

  return {
    props: {
      hello: 'world',
    },
  };
}
