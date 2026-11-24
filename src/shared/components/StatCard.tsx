
import type { ReactNode } from "react";

interface StatCardProps {
  label: string;
  value: string | number;
  hint?: string;
  icon?: ReactNode;
  trend?: string;
  trendType?: "positive" | "negative" | "neutral";
}

function StatCard({
  label,
  value,
  hint,
  icon,
  trend,
  trendType = "neutral",
}: StatCardProps) {
  return (
    <div className="stat-card">
      <div className="stat-card-top">
        <span className="stat-card-label">{label}</span>
        {icon && <div className="stat-card-icon">{icon}</div>}
      </div>

      <div className="stat-card-value">{value}</div>

      <div className="stat-card-bottom">
        {trend && (
          <span className={`stat-trend ${trendType}`}>
            {trend}
          </span>
        )}
        {hint && <span className="stat-hint">{hint}</span>}
      </div>
    </div>
  );
}

export default StatCard;
