import type { FC } from "react";
import type { User } from "next-auth";
import classNames from "classnames";

interface Props {
  user: User;
  onClick: () => void;
}

export const Avatar: FC<Props> = ({ user, onClick }) => {
  return (
    <label
      tabIndex={0}
      className={classNames("btn-ghost", "btn-circle", "avatar", "btn")}
      onClick={onClick}
    >
      <div className={classNames("w-10", "rounded-full")}>
        <img src={user.image ?? ""} alt={user.name ?? ""} />
      </div>
    </label>
  );
};
