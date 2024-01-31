import React from "react";
import { notFound } from "next/navigation";

function Slug({
  params,
}: {
  params: {
    slug: string[];
  };
}) {
  if (params.slug?.length > 4) {
    return notFound();
  }
  return (
    <div>
      <h1>Hello</h1>
      <ul>
        {params.slug?.map((url, index) => (
          <li key={index}>{url}</li>
        ))}
      </ul>
    </div>
  );
}

export default Slug;
