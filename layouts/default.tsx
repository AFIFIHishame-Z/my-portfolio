import React from "react";
import { ReactNode } from "react";
import NavBar from "~/components/header/NavBar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main>{children}</main>
      <footer>fo oter</footer>
    </div>
  );
}
