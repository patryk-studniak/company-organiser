import { CreateTabForm, Tabs } from "~/components";
import type { ReactElement } from "react";
import { MainLayout } from "~/layouts";

export default function HomePage() {
  return (
    <>
      <CreateTabForm />
      <Tabs />
    </>
  );
}

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
