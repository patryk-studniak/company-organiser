import type { FC } from "react";
import classNames from "classnames";
import { signIn } from "next-auth/react";

export const SignInButton: FC = () => {
  return (
    <button
      className={classNames("btn", "btn-primary")}
      onClick={() => void signIn()}
    >
      Sign In
    </button>
  );
};
