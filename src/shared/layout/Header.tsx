import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Menu,
  Bell,
  Sun,
  Moon,
  ChevronDown,
  UserRound,
  Settings,
  LogOut,
  Globe,
} from "lucide-react";
import { useTheme } from "../theme/ThemeContext";

interface HeaderProps {
  onMenuClick: () => void;
}

function Header({ onMenuClick }: HeaderProps) {
  const { theme, toggleTheme } = useTheme();
  const [profileOpen, setProfileOpen] = useState(false);
  const [language, setLanguage] = useState("EN");
  const navigate = useNavigate();

  return (
    <header className="app-header">
      <div className="header-left">
        <button
          className="icon-button menu-button"
          onClick={onMenuClick}
          aria-label="Open menu"
        >
          <Menu size={22} />
        </button>

        <div className="breadcrumb">
          <span>MDMS</span>
          <span className="breadcrumb-divider">/</span>
          <strong>Workspace</strong>
        </div>
      </div>

      <div className="header-actions">
        <div className="language-selector">
          <Globe size={17} />
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            aria-label="Select language"
          >
            <option value="EN">EN</option>
            <option value="HI">HI</option>
            <option value="KN">KN</option>
          </select>
        </div>

        <button
          className="icon-button"
          onClick={toggleTheme}
          aria-label="Toggle theme"
          title="Toggle theme"
        >
          {theme === "light" ? <Moon size={19} /> : <Sun size={19} />}
        </button>

        <button
          className="icon-button notification-button"
          aria-label="Notifications"
        >
          <Bell size={20} />
          <span className="notification-count">3</span>
        </button>

        <div className="profile-wrapper">
          <button
            className="profile-trigger"
            onClick={() => setProfileOpen(!profileOpen)}
          >
            <div className="profile-avatar">RP</div>

            <div className="profile-info">
              <strong>Raj Patil</strong>
              <span>Administrator</span>
            </div>

            <ChevronDown size={16} />
          </button>

          {profileOpen && (
            <div className="profile-dropdown">
              <Link to="/profile" onClick={() => setProfileOpen(false)}>
                <UserRound size={17} />
                My Profile
              </Link>

              <Link to="/profile" onClick={() => setProfileOpen(false)}>
                <Settings size={17} />
                Settings
              </Link>

              <div className="dropdown-divider" />

              <button
                onClick={() => {
                  setProfileOpen(false);
                  navigate("/login");
                }}
              >
                <LogOut size={17} />
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
