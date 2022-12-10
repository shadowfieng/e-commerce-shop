import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import  './style.module.scss'

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <React.Fragment>
      <Header />
      <main>{children}</main>
      <Footer />
    </React.Fragment>
  );
};
