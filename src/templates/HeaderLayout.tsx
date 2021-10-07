import { memo, VFC, ReactNode } from "react";

import { Header } from "../components/organisms/layout/Header";

type Props = {
  children: ReactNode;
};

//ReactNode...<></>で囲った要素を型定義する事?

export const HeaderLayout: VFC<Props> = memo((props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
    </>
  );
});
