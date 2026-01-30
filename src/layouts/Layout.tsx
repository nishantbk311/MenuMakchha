import  Header  from "./Header";
import  Footer  from "./Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="container flex-1 overflow-x-hidden ">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}