import { comments } from "../data";

type RequestParams = {
  params: {
    id: string;
  };
};

export async function GET(request: Request, { params }: RequestParams) {
  const comment = comments.find(
    (comment) => comment.id === parseInt(params.id)
  );
  if (!comment) {
    return new Response("comment not found", {
      status: 404,
    });
  }
  return Response.json(comment);
}

export async function PATCH(request: Request, { params }: RequestParams) {
  const updatedcommment = await request.json();
  const commentId = parseInt(params.id);

  comments[commentId - 1] = {
    id: commentId,
    text: updatedcommment.text,
  };

  return new Response(JSON.stringify(comments[commentId - 1]), {
    headers: {
      "Content-type": "application/json",
    },
    status: 200,
  });
}

export async function DELETE({ params }: RequestParams) {
  const index = comments.findIndex(
    (comments) => comments.id === parseInt(params.id)
  );
  comments.splice(index, 1);
  return Response.json("element deleted");
}
