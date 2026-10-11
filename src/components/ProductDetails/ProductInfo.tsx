import { useState } from "react";

import type { Product } from "../../types/product";

import QuantitySelector from "./QuantitySelector";
import AddToCartButton from "./AddToCartButton";

interface ProductInfoProps {
  product: Product;
}

const ProductInfo = ({ product }: ProductInfoProps) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div>
      <p className="text-sm text-gray-500">{product.category}</p>

      <h1 className="mt-2 text-4xl font-bold">{product.name}</h1>

      <p className="mt-4 text-2xl font-bold text-red-900">₹ {product.price}</p>

      <p className="mt-6 text-gray-600 leading-7">
        {product.description ||
          "Beautiful handcrafted Laddu Gopal accessory made with premium quality materials. Perfect for daily worship and festive occasions."}
      </p>

      <QuantitySelector quantity={quantity} onChange={setQuantity} />

      <div className="mt-6">
        <AddToCartButton product={product} quantity={quantity} />
      </div>
    </div>
  );
};

export default ProductInfo;
