import { API_URL } from "../constants/api";

export const apiRequest = async <T>(
  path: string,
  options: RequestInit = {},
): Promise<T> => {
  const response = await fetch(`${API_URL}${path}`, {
    credentials: "include",
    ...options,
  });

  const result = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(result.message || "Request failed");
  }

  return result as T;
};
