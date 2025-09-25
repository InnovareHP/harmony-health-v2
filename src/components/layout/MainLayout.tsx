import type { ReactNode } from "react";
import Footer from "../Footer";
import Header from "../Header";

type Props = { children: ReactNode };

export default function MainLayout({ children }: Props) {
  return (
    <main className="flex flex-col min-h-screen">
      <Header /> {/* Only place where Header is rendered */}
      <section className="flex-grow relative">{children}</section>
      <Footer />
    </main>
  );
}
