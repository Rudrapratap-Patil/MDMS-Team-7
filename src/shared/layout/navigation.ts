import {
  LayoutDashboard,
  Receipt,
  Activity,
  Bell,
  Gauge,
  Users,
  ChartNoAxesCombined,
  Settings,
  MapPin,
  ClipboardList,
  ShieldCheck,
} from "lucide-react";

import type { ElementType } from "react";

export type UserRole = "user" | "zone" | "enterprise";

export interface NavigationItem {
  label: string;
  path: string;
  icon: ElementType;
}

export const navigationConfig: Record<UserRole, NavigationItem[]> = {
  user: [
    { label: "Dashboard", path: "/user/dashboard", icon: LayoutDashboard },
    { label: "Bills & Payments", path: "/user/bills", icon: Receipt },
    { label: "Meter Data", path: "/user/meter-data", icon: Activity },
    { label: "Alerts", path: "/user/alerts", icon: Bell },
  ],

  zone: [
    { label: "Dashboard", path: "/zone/dashboard", icon: LayoutDashboard },
    { label: "Meter Management", path: "/zone/meters", icon: Gauge },
    { label: "User Management", path: "/zone/users", icon: Users },
    {
      label: "Reports & Analytics",
      path: "/zone/reports",
      icon: ChartNoAxesCombined,
    },
    { label: "Alerts", path: "/zone/alerts", icon: Bell },
    { label: "Settings", path: "/zone/settings", icon: Settings },
  ],

  enterprise: [
    {
      label: "Dashboard",
      path: "/enterprise/dashboard",
      icon: LayoutDashboard,
    },
    { label: "Zone Management", path: "/enterprise/zones", icon: MapPin },
    { label: "Meter Management", path: "/enterprise/meters", icon: Gauge },
    { label: "User & Role Management", path: "/enterprise/users", icon: Users },
    {
      label: "Reports & Analytics",
      path: "/enterprise/reports",
      icon: ChartNoAxesCombined,
    },
    { label: "Alerts", path: "/enterprise/alerts", icon: Bell },
    {
      label: "Audit Logs",
      path: "/enterprise/audit-logs",
      icon: ClipboardList,
    },
    { label: "Settings", path: "/enterprise/settings", icon: ShieldCheck },
  ],
};

export const roleLabels: Record<UserRole, string> = {
  user: "End User",
  zone: "Zone Administrator",
  enterprise: "Enterprise Administrator",
};
