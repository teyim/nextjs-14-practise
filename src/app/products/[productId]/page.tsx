import { Metadata } from "next";

type SingleProductProps = {
  params: {
    productId: string;
  };
};

export const generateMetadata = ({ params }: SingleProductProps): Metadata => {
  return {
    title: `product number ${params.productId}`,
  };
};

function SingleProduct({ params }: SingleProductProps) {
  return <div>SingleProduct number {params.productId}</div>;
}

export default SingleProduct;
