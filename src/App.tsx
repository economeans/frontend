import "@/styles/app";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "@/pages/home";
import Article from "@/pages/article";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { useEffect } from "react";

export default function App() {
  function setScreenSize() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
  
  useEffect(() => {
    setScreenSize();
    window.addEventListener("resize", setScreenSize)
  }, []);

  return (
    <main className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/article" element={<Article />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  );
}
