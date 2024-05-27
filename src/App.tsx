import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import "@/sass/app";

export default function App() {
  const { pathname } = useLocation();
  const pagesTitle: Record<PageTitleTypes, string> = {
    article: "Article",
  };

  useEffect(() => {
    const path = pathname.slice(1);
    document.title = `${process.env.APP_TITLE}${
      path ? " | " + pagesTitle[path as PageTitleTypes] : ""
    }`;
  }, [pathname]);

  return (
    <main className="app">
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
}
