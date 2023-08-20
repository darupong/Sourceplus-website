"use client";

import { FC, PropsWithChildren } from "react";
import { FooterLayout, HeaderLayout } from "./components/Layout";

interface IProps extends PropsWithChildren {}

const App: FC<IProps> = ({ children }) => {
  return (
    <>
      <HeaderLayout />
      {children}
      <FooterLayout />
    </>
  );
};

export default App;
