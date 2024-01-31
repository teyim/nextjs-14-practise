"use client";

function ErrorBoundary({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div>
      {error.message}
      {/*Rerenders error boundary content*/}
      <button onClick={reset}>Retry</button>
    </div>
  );
}

export default ErrorBoundary;
