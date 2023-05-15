import { type NextPage } from "next";
import Head from "next/head";
import HomePage from "~/pages/HomePage";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Company Organiser</title>
        <meta
          name="description"
          content="Application for organising company expenses and planning"
        />
      </Head>
      <HomePage />
    </>
  );
};

export default Home;
