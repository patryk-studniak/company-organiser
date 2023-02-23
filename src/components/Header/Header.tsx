import type { FC } from "react";
import { useSession, signOut } from "next-auth/react";
import classNames from "classnames";
import { Avatar } from "~/components/Header/Avatar";
import { SignInButton } from "~/components/Header/SignInButton";

export const Header: FC = () => {
  const { data: sessionData } = useSession();

  return (
    <div className={classNames("navbar", "bg-primary", "text-primary-content")}>
      <div className={classNames("flex-1", "pl-5", "text-3xl", "font-bold")}>
        {sessionData?.user?.name ? sessionData.user.name : ""}
      </div>
      <div className={classNames("flex-none", "gap-2")}>
        <div className={classNames("dropdown-end", "dropdown")}>
          {sessionData?.user ? (
            <Avatar user={sessionData.user} onClick={() => void signOut()} />
          ) : (
            <SignInButton />
          )}
        </div>
      </div>
    </div>
  );
};
