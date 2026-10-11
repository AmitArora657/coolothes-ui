import { useEffect, useState } from "react";

import { getCategories } from "../services/categoryService";
import { getProducts, toProduct } from "../services/productService";
import type { ApiCategory } from "../types/admin";
import type { Product } from "../types/product";

const useCatalog = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<ApiCategory[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    Promise.all([getProducts(), getCategories()])
      .then(([apiProducts, apiCategories]) => {
        setProducts(apiProducts.map(toProduct));
        setCategories(apiCategories);
      })
      .catch((error: Error) => setError(error.message))
      .finally(() => setIsLoading(false));
  }, []);

  return { products, categories, isLoading, error };
};

export default useCatalog;
