import type { FC } from "react";
import classNames from "classnames";
import { signOut } from "next-auth/react";
import { texts } from "~/texts/texts";

const {
  buttons: { signOut: signOutText },
} = texts;

export const SignOutButton: FC = () => {
  return (
    <button
      className={classNames("btn", "btn-primary")}
      onClick={() => void signOut()}
    >
      {signOutText}
    </button>
  );
};
