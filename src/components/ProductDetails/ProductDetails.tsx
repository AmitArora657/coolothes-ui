import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Container from "../common/Container";
import { getProduct, toProduct } from "../../services/productService";
import type { Product } from "../../types/product";
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";

const ProductDetails = () => {
  const { id } = useParams();

  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getProduct(Number(id))
      .then((apiProduct) => setProduct(toProduct(apiProduct)))
      .catch(() => setProduct(null))
      .finally(() => setIsLoading(false));
  }, [id]);

  if (isLoading) {
    return <p className="py-20 text-center text-gray-500">Loading product...</p>;
  }

  if (!product) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-2xl font-semibold">Product not found</h2>

        <p className="mt-2 text-gray-500">
          The product you are looking for does not exist.
        </p>
      </div>
    );
  }

  return (
    <section className="py-20">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2">
          <ProductImage
            key={product.id}
            images={product.images?.length ? product.images : [product.image]}
            name={product.name}
          />

          <ProductInfo product={product} />
        </div>
      </Container>
    </section>
  );
};

export default ProductDetails;
