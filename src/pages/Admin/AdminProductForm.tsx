import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { getCategories } from "../../services/categoryService";
import { createProduct } from "../../services/productService";
import type { ApiCategory } from "../../types/admin";

const MAX_IMAGES = 5;
const MAX_IMAGE_SIZE = 5 * 1024 * 1024;
const ALLOWED_IMAGE_TYPES = ["image/jpeg", "image/png", "image/webp"];

const inputClass =
  "w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-800 outline-none transition focus:border-amber-400 focus:bg-white focus:ring-2 focus:ring-amber-100";
const labelClass = "mb-2 block text-sm font-medium text-gray-700";

const AdminProductForm = () => {
  const navigate = useNavigate();

  const [categories, setCategories] = useState<ApiCategory[]>([]);
  const [isLoadingCategories, setIsLoadingCategories] = useState(true);

  const [name, setName] = useState("");
  const [idCategory, setIdCategory] = useState("");
  const [price, setPrice] = useState("");
  const [stockQuantity, setStockQuantity] = useState("0");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);

  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    getCategories()
      .then(setCategories)
      .catch((error: Error) => setError(error.message))
      .finally(() => setIsLoadingCategories(false));
  }, []);

  useEffect(() => {
    const urls = images.map((image) => URL.createObjectURL(image));

    setPreviews(urls);

    return () => urls.forEach((url) => URL.revokeObjectURL(url));
  }, [images]);

  const handleImagesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selected = Array.from(event.target.files ?? []);

    event.target.value = "";

    const invalidType = selected.find(
      (file) => !ALLOWED_IMAGE_TYPES.includes(file.type),
    );

    if (invalidType) {
      setError(`"${invalidType.name}" is not a JPEG, PNG, or WebP image.`);
      return;
    }

    const tooLarge = selected.find((file) => file.size > MAX_IMAGE_SIZE);

    if (tooLarge) {
      setError(`"${tooLarge.name}" is larger than 5MB.`);
      return;
    }

    if (images.length + selected.length > MAX_IMAGES) {
      setError(`You can upload up to ${MAX_IMAGES} images.`);
      return;
    }

    setError("");
    setImages((current) => [...current, ...selected]);
  };

  const removeImage = (index: number) => {
    setImages((current) => current.filter((_, i) => i !== index));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setError("");
    setIsSubmitting(true);

    try {
      const product = await createProduct({
        id_category: Number(idCategory),
        name: name.trim(),
        description: description.trim(),
        price: Number(price),
        stock_quantity: Number(stockQuantity),
        images,
      });

      navigate("/admin/products", {
        state: { message: `Product "${product.name}" created.` },
      });
    } catch (error) {
      setError(
        error instanceof Error ? error.message : "Failed to create product",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-800">New product</h1>

        <Link
          to="/admin/products"
          className="text-sm font-medium text-amber-700 transition hover:text-amber-800"
        >
          ← Back to products
        </Link>
      </div>

      {error && (
        <div
          role="alert"
          className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600"
        >
          {error}
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="space-y-5 rounded-2xl bg-white p-6 shadow-sm"
      >
        <div>
          <label htmlFor="product-name" className={labelClass}>
            Name
          </label>
          <input
            id="product-name"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            maxLength={200}
            required
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="product-category" className={labelClass}>
            Category
          </label>
          <select
            id="product-category"
            value={idCategory}
            onChange={(event) => setIdCategory(event.target.value)}
            required
            disabled={isLoadingCategories}
            className={inputClass}
          >
            <option value="">
              {isLoadingCategories ? "Loading..." : "Select a category"}
            </option>
            {categories.map((category) => (
              <option key={category.id_category} value={category.id_category}>
                {category.name}
              </option>
            ))}
          </select>
          {!isLoadingCategories && categories.length === 0 && (
            <p className="mt-2 text-sm text-gray-500">
              No categories yet.{" "}
              <Link
                to="/admin/categories"
                className="font-medium text-amber-700 hover:text-amber-800"
              >
                Create one first
              </Link>
              .
            </p>
          )}
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="product-price" className={labelClass}>
              Price (₹)
            </label>
            <input
              id="product-price"
              type="number"
              min="0"
              step="0.01"
              value={price}
              onChange={(event) => setPrice(event.target.value)}
              required
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="product-stock" className={labelClass}>
              Stock quantity
            </label>
            <input
              id="product-stock"
              type="number"
              min="0"
              step="1"
              value={stockQuantity}
              onChange={(event) => setStockQuantity(event.target.value)}
              required
              className={inputClass}
            />
          </div>
        </div>

        <div>
          <label htmlFor="product-description" className={labelClass}>
            Description
          </label>
          <textarea
            id="product-description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            rows={4}
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="product-images" className={labelClass}>
            Images ({images.length}/{MAX_IMAGES})
          </label>
          <input
            id="product-images"
            type="file"
            accept={ALLOWED_IMAGE_TYPES.join(",")}
            multiple
            onChange={handleImagesChange}
            disabled={images.length >= MAX_IMAGES}
            className="block w-full text-sm text-gray-600 file:mr-4 file:rounded-xl file:border-0 file:bg-amber-50 file:px-4 file:py-2 file:font-medium file:text-amber-800 hover:file:bg-amber-100 disabled:opacity-60"
          />
          <p className="mt-2 text-xs text-gray-500">
            JPEG, PNG, or WebP, up to 5MB each. The first image is the primary
            image.
          </p>

          {previews.length > 0 && (
            <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
              {previews.map((preview, index) => (
                <div
                  key={preview}
                  className="relative overflow-hidden rounded-xl border bg-gray-50"
                >
                  <img
                    src={preview}
                    alt={images[index]?.name ?? `Image ${index + 1}`}
                    className="h-28 w-full object-cover"
                  />
                  {index === 0 && (
                    <span className="absolute left-2 top-2 rounded-full bg-amber-600 px-2 py-0.5 text-xs font-medium text-white">
                      Primary
                    </span>
                  )}
                  <button
                    type="button"
                    onClick={() => removeImage(index)}
                    aria-label={`Remove image ${index + 1}`}
                    className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-white/90 text-sm text-gray-700 shadow hover:bg-red-50 hover:text-red-600"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-xl bg-amber-600 px-4 py-3 font-medium text-white shadow-md transition hover:bg-amber-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? "Creating product..." : "Create product"}
        </button>
      </form>
    </div>
  );
};

export default AdminProductForm;
