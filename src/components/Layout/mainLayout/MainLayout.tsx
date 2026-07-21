import { Outlet } from "react-router";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

export default function MainLayout() {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}