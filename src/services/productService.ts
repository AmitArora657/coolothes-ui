import { API_URL } from "../constants/api";
import type { ApiProduct, CreateProductInput } from "../types/admin";
import { apiRequest } from "./apiRequest";

export const getProducts = async (): Promise<ApiProduct[]> => {
  const result = await apiRequest<{ products: ApiProduct[] }>("/products");

  return result.products;
};

export const createProduct = async (
  product: CreateProductInput,
): Promise<ApiProduct> => {
  const formData = new FormData();

  formData.append("id_category", String(product.id_category));
  formData.append("name", product.name);
  formData.append("description", product.description);
  formData.append("price", String(product.price));
  formData.append("stock_quantity", String(product.stock_quantity));

  product.images.forEach((image) => formData.append("images", image));

  const result = await apiRequest<{ product: ApiProduct }>("/products", {
    method: "POST",
    body: formData,
  });

  return result.product;
};

export const getProductImageUrl = (idProduct: number, idImage: number) =>
  `${API_URL}/products/${idProduct}/images/${idImage}`;
