import type { AppProps, AppType } from "next/app";
import type { NextPage } from "next";
import type { ReactNode, ReactElement } from "react";
import { api } from "~/utils/api";
import { SessionProvider } from "next-auth/react";
import type { Session } from "next-auth";

import "~/styles/globals.css";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const App: AppType<{
  Component: NextPageWithLayout;
  session: Session | null;
}> = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);
  const pageWithLayout = getLayout(<Component {...pageProps} />);

  return <SessionProvider session={session}>{pageWithLayout}</SessionProvider>;
};

export default api.withTRPC(App);
