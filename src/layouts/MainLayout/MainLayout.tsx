import type { FC, PropsWithChildren } from "react";
import { Header } from "~/components";

export const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <main>
      <Header />
      {children}
    </main>
  );
};
