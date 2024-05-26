import { Outlet } from "react-router-dom";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import "@/styles/app";

export default function App() {
  return (
    <main className="app">
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
}
