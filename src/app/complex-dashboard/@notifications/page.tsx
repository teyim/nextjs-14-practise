import Link from "next/link";
import React from "react";

export function Notification() {
  return (
    <div>
      <div>Notification</div>
      <Link href="/complex-dashboard/archived">Archived</Link>
    </div>
  );
}

export default Notification;
