import Link from "next/link";
import React from "react";

export function ArchivedNotification() {
  return (
    <div>
      <div> Archived Notification</div>
      <Link href="/complex-dashboard">Archived</Link>
    </div>
  );
}

export default ArchivedNotification;
