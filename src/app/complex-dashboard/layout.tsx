import React from "react";

export default function ProductLayout({
  children,
  revenue,
  analytics,
  notifications,
  login,
}: {
  children: React.ReactNode;
  revenue: React.ReactNode;
  analytics: React.ReactNode;
  notifications: React.ReactNode;
  login: React.ReactNode;
}) {
  const isLoggedIn = false;

  return (
    <>
      {isLoggedIn ? (
        <div>
          <div>{children}</div>
          <div>
            {/*Parallel routes*/}
            <div>{revenue}</div>
            <div>{analytics}</div>
            <div>{notifications}</div>
          </div>
        </div>
      ) : (
        login
      )}
    </>
  );
}
