type Status =
  | "Active"
  | "Deactivated"
  | "Pending"
  | "Paid"
  | "Overdue"
  | "Critical"
  | "Warning"
  | "Resolved"
  | "Inactive"
  | "Unread"
  | "Read";

interface StatusBadgeProps {
  status: Status | string;
}

function StatusBadge({ status }: StatusBadgeProps) {
  const normalizedStatus = status.toLowerCase().replace(/\s+/g, "-");

  return (
    <span className={`status-badge status-${normalizedStatus}`}>
      <span className="status-dot" />
      {status}
    </span>
  );
}

export default StatusBadge;
