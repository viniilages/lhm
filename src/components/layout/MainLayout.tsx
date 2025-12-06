import { Outlet } from "react-router-dom";
import MainHeader from "./MainHeader.js";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <MainHeader />
      <main className="pt-24">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
