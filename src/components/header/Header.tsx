import React from "react";
import NavBar from "@/components/navBar/NavBar";
import './styles.scss'

export default function Header(): React.JSX.Element {
  return (
    <div className="header">
      <NavBar />
    </div>
  )
}