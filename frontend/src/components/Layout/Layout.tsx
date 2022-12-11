import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <React.Fragment>
      <Header />
      <main className="bg-gradient-to-br from-slate-600 to-gray-800 pt-24 px-4 pb-16">
        {children}
      </main>
      <Footer />
    </React.Fragment>
  );
};
