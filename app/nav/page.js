'use client'
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Main } from "./components/Main";

import "./nav-page.scss";

export default function Page() {
  return (
    <div className="page">
    <Header/>
    <Sidebar/>
    <Main/>
    </div>
    
  );
}
