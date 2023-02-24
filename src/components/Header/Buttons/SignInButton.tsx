import type { FC } from "react";
import classNames from "classnames";
import { signIn } from "next-auth/react";
import { texts } from "~/texts/texts";

const {
  buttons: { signIn: signInText },
} = texts;

export const SignInButton: FC = () => {
  return (
    <button
      className={classNames("btn", "btn-primary")}
      onClick={() => void signIn()}
    >
      {signInText}
    </button>
  );
};
