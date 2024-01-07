import { ReactNode, memo } from "react";

type Props = {
  children: ReactNode;
};

function TableTbody({ children }: Props) {
  return <tbody>{children}</tbody>;
}

export default memo(TableTbody);
