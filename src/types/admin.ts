export interface ApiCategory {
  id_category: number;
  name: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface ApiProductImage {
  id_image: number;
  is_primary: boolean;
}

export interface ApiProduct {
  id_product: number;
  id_category: number;
  category_name: string;
  name: string;
  description: string | null;
  price: string;
  stock_quantity: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
  images: ApiProductImage[];
}

export interface CreateProductInput {
  id_category: number;
  name: string;
  description: string;
  price: number;
  stock_quantity: number;
  images: File[];
}
