import Link from "next/link";
import React from "react";

function F4() {
  return (
    <div>
      <h3>F4</h3>
      <Link href="/f1/f3">F3</Link>
      <Link href="/blog">Blog</Link>
    </div>
  );
}

export default F4;
