import { ReactNode, memo } from "react";

type Props = {
  children: ReactNode;
};

function TableThead({ children }: Props) {
  return <thead>{children}</thead>;
}

export default memo(TableThead);
