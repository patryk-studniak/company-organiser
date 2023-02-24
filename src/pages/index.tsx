import { type NextPage } from "next";
import Head from "next/head";
import { Header } from "~/components";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Company Organiser</title>
        <meta
          name="description"
          content="Application for organising company expenses and planning"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
      </main>
    </>
  );
};

export default Home;
