import { CreateTabForm, Tabs } from "~/components";
import { MainLayout } from "~/layouts";
import type { FC } from "react";

const HomePage: FC = () => {
  return (
    <MainLayout>
      <CreateTabForm />
      <Tabs />
    </MainLayout>
  );
};

export default HomePage;
