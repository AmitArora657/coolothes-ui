import { API_URL } from "../constants/api";

export interface AuthUser {
  id_user: number;
  name: string;
  email: string;
  role: "USER" | "ADMIN";
  is_active: boolean;
}

interface LoginData {
  email: string;
  password: string;
}

export const loginUser = async (data: LoginData): Promise<AuthUser> => {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "Login failed");
  }

  return result.user;
};

export const getCurrentUser = async (): Promise<AuthUser | null> => {
  const response = await fetch(`${API_URL}/auth/me`, {
    method: "GET",
    credentials: "include",
  });

  if (!response.ok) {
    return null;
  }

  const result = await response.json();

  if (!result.success) {
    return null;
  }

  return result.user;
};

export const logoutUser = async (): Promise<void> => {
  await fetch(`${API_URL}/auth/logout`, {
    method: "POST",
    credentials: "include",
  });
};

interface RegisterData {
  name: string;
  email: string;
  password: string;
}

export const registerUser = async (data: RegisterData): Promise<void> => {
  const response = await fetch(`${API_URL}/users/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "Registration failed");
  }
};
