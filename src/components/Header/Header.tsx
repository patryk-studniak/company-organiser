import type { FC } from "react";
import { useSession } from "next-auth/react";
import classNames from "classnames";
import { Avatar } from "~/components/Header/Avatar/Avatar";
import { SignInButton } from "~/components/Header/Buttons/SignInButton";
import { SignOutButton } from "~/components/Header/Buttons/SignOutButton";
import { texts } from "~/texts/texts";

const { appName } = texts;
export const Header: FC = () => {
  const { data: sessionData } = useSession();

  return (
    <div className={classNames("navbar", "bg-primary", "text-primary-content")}>
      <div className={classNames("flex-1", "pl-5", "text-3xl", "font-bold")}>
        {sessionData?.user?.name ? `${sessionData.user.name} - ${appName}` : ""}
      </div>
      <div className={classNames("flex-none", "gap-2")}>
        {sessionData?.user ? (
          <>
            <SignOutButton />
            <Avatar user={sessionData.user} />
          </>
        ) : (
          <SignInButton />
        )}
      </div>
    </div>
  );
};
