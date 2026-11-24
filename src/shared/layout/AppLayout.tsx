import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import type { UserRole } from "./navigation";

function AppLayout() {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const role: UserRole = location.pathname.startsWith("/enterprise")
    ? "enterprise"
    : location.pathname.startsWith("/zone")
      ? "zone"
      : "user";

  return (
    <div className="app-layout">
      <Sidebar
        role={role}
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <div className="main-container">
        <Header onMenuClick={() => setSidebarOpen(true)} />

        <main className="page-content">
          <Outlet />
        </main>

        <footer className="app-footer">
          <span>© 2026 MDMS. All rights reserved.</span>
          <span>Meter Data Management System</span>
        </footer>
      </div>
    </div>
  );
}

export default AppLayout;
