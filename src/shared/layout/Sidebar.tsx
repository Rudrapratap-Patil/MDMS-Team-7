import { NavLink } from "react-router-dom";
import { X, Zap } from "lucide-react";
import { navigationConfig, roleLabels, type UserRole } from "./navigation";

interface SidebarProps {
  role: UserRole;
  open: boolean;
  onClose: () => void;
}

function Sidebar({ role, open, onClose }: SidebarProps) {
  const menuItems = navigationConfig[role];

  return (
    <>
      {open && <div className="sidebar-overlay" onClick={onClose} />}

      <aside className={`sidebar ${open ? "sidebar-open" : ""}`}>
        <div className="sidebar-brand">
          <div className="brand-icon">
            <Zap size={23} fill="currentColor" />
          </div>

          <div className="brand-text">
            <h2>MDMS</h2>
            <span>Meter Management</span>
          </div>

          <button
            className="mobile-close"
            onClick={onClose}
            aria-label="Close sidebar"
          >
            <X size={20} />
          </button>
        </div>

        <div className="sidebar-section">
          <span className="sidebar-label">WORKSPACE</span>

          <nav className="sidebar-nav">
            {menuItems.map((item) => {
              const Icon = item.icon;

              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end
                  onClick={onClose}
                  className={({ isActive }) =>
                    `sidebar-link ${isActive ? "active" : ""}`
                  }
                >
                  <Icon size={19} strokeWidth={1.8} />
                  <span>{item.label}</span>
                </NavLink>
              );
            })}
          </nav>
        </div>

        <div className="sidebar-bottom">
          <div className="role-indicator">
            <div className="role-dot" />
            <div>
              <span>Logged in as</span>
              <strong>{roleLabels[role]}</strong>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
