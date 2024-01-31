import React from "react";

function Review({
  params,
}: {
  params: { reviewId: string; productId: string };
}) {
  if (params.reviewId === "2") {
    throw new Error("Id not supported");
  }

  return (
    <div>
      Review {params.reviewId} or {params.productId}
    </div>
  );
}

export default Review;
