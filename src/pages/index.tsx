import { type NextPage } from "next";
import Head from "next/head";
import { Header } from "~/components";
import { api } from "~/utils/api";
import { useSession } from "next-auth/react";
import { useState } from "react";

const Home: NextPage = () => {
  const { data: sessionData } = useSession();
  const { data: groups, refetch: refetchGroups } =
    api.expenseGroup.getAllGroups.useQuery(undefined, {
      enabled: !!sessionData?.user,
    });
  const createGroup = api.expenseGroup.createGroup.useMutation({
    onSuccess: () => {
      void refetchGroups();
    },
  });
  const [inputValue, setInputValue] = useState("");

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
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={() => void createGroup.mutate({ title: inputValue })}>
          Create group
        </button>
        <pre>{JSON.stringify(groups)}</pre>
      </main>
    </>
  );
};

export default Home;
