import type { FC } from "react";
import type { User } from "next-auth";
import classNames from "classnames";
import Image from "next/image";

interface Props {
  user: User;
}

export const Avatar: FC<Props> = ({ user }) => {
  return (
    <label
      tabIndex={0}
      className={classNames("btn-ghost", "btn-circle", "avatar", "btn")}
    >
      <div className={classNames("w-10", "rounded-full")}>
        <Image
          src={user.image ?? ""}
          alt={user.name ?? ""}
          width="100"
          height="100"
        />
      </div>
    </label>
  );
};
