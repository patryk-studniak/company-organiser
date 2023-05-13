import type { FC, PropsWithChildren } from "react";
import { Header } from "~/components";

export const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <body>
      <main>
        <Header />
        {children}
      </main>
    </body>
  );
};
