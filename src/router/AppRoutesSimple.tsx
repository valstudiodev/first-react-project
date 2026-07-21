import { Route, Routes } from "react-router";
import { About, Contacts } from "@/pages";
import MainLayout from "@/components/Layout/mainLayout/MainLayout";
import { Home } from "@/components";


export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
      </Route>
    </Routes>
  )
}