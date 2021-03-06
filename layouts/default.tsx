import React from "react";
import { ReactNode } from "react";
import Footer from "~/components/footer/Footer";
import NavBar from "~/components/header/NavBar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col h-screen justify-between">
      <header className="relative z-50">
        <NavBar />
      </header>
      <main className="mb-auto">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
