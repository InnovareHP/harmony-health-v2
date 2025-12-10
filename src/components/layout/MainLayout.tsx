import { CrisisBanner } from "@/src/index-page/index-page";
import type { ReactNode } from "react";
import DialogMarket from "../DialogMarket";
import Footer from "../Footer";
import Header from "../Header";

type Props = { children: ReactNode; isIndexPage: boolean };

export default function MainLayout({ children, isIndexPage }: Props) {
  return (
    <main className="flex flex-col min-h-screen">
      {isIndexPage && <CrisisBanner />}
      <Header /> {/* Only place where Header is rendered */}
      <section className="flex-grow relative">{children}</section>
      <Footer />
      <DialogMarket />
    </main>
  );
}
