import type { ReactNode } from "react";
import Footer from "../index-page/footer";
import Header from "../index-page/header";

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
