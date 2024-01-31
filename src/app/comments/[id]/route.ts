import { redirect } from "next/navigation";
import { type NextRequest } from "next/server";
import { comments } from "../data";

type RequestParams = {
  params: {
    id: string;
  };
};

export async function GET(request: NextRequest, { params }: RequestParams) {
  const requestHeaders = new Headers(request.headers);
  console.log(requestHeaders.get("user-agent"));
  const comment = comments.find(
    (comment) => comment.id === parseInt(params.id)
  );
  if (parseInt(params.id) > comments.length) {
    // redirects user to different route
    redirect("/comments");
  }
  return Response.json(comment);
}

export async function PATCH(request: NextRequest, { params }: RequestParams) {
  const updatedcommment = await request.json();
  const commentId = parseInt(params.id);
  const theme = request.cookies.get("theme");
  console.log(theme);

  comments[commentId - 1] = {
    id: commentId,
    text: updatedcommment.text,
  };

  return new Response(JSON.stringify(comments[commentId - 1]), {
    headers: {
      "Content-type": "application/json",
      "set-Cookie": "theme=dark",
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
