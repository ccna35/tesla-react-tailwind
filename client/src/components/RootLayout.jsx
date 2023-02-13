import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function RootLayout() {
  return (
    <div className="rootLayout">
      <Navbar />
      <main className="overflow-x-hidden overflow-y-scroll w-screen h-screen snap-y snap-mandatory">
        <Outlet />
      </main>
    </div>
  );
}
