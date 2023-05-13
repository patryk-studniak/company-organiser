import type { FC } from "react";

interface Props {
  text: string;
  callback: () => void;
}

export const SubmitButton: FC<Props> = ({ text, callback }) => {
  return <button onClick={callback}>{text}</button>;
};
