import type { ApiCategory } from "../types/admin";
import { apiRequest } from "./apiRequest";

export const getCategories = async (): Promise<ApiCategory[]> => {
  const result = await apiRequest<{ categories: ApiCategory[] }>(
    "/categories",
  );

  return result.categories;
};

export const createCategory = async (name: string): Promise<ApiCategory> => {
  const result = await apiRequest<{ category: ApiCategory }>("/categories", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name }),
  });

  return result.category;
};
