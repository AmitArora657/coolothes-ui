import React, { useEffect, useState } from "react";

import { createCategory, getCategories } from "../../services/categoryService";
import type { ApiCategory } from "../../types/admin";

const AdminCategories = () => {
  const [categories, setCategories] = useState<ApiCategory[]>([]);
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    getCategories()
      .then(setCategories)
      .catch((error: Error) => setError(error.message))
      .finally(() => setIsLoading(false));
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setError("");
    setSuccess("");
    setIsSubmitting(true);

    try {
      const category = await createCategory(name.trim());

      setCategories((current) => [...current, category]);
      setName("");
      setSuccess(`Category "${category.name}" created.`);
    } catch (error) {
      setError(
        error instanceof Error ? error.message : "Failed to create category",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-800">Categories</h1>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 rounded-2xl bg-white p-6 shadow-sm sm:flex-row sm:items-end"
      >
        <div className="flex-1">
          <label
            htmlFor="category-name"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            New category name
          </label>

          <input
            id="category-name"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="e.g. Poshak"
            maxLength={100}
            required
            className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-800 outline-none transition focus:border-amber-400 focus:bg-white focus:ring-2 focus:ring-amber-100"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting || !name.trim()}
          className="rounded-xl bg-amber-600 px-6 py-3 font-medium text-white shadow-md transition hover:bg-amber-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? "Creating..." : "Create category"}
        </button>
      </form>

      {error && (
        <div
          role="alert"
          className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600"
        >
          {error}
        </div>
      )}

      {success && (
        <div
          role="status"
          className="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800"
        >
          {success}
        </div>
      )}

      <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
        {isLoading ? (
          <p className="p-6 text-sm text-gray-500">Loading categories...</p>
        ) : categories.length === 0 ? (
          <p className="p-6 text-sm text-gray-500">No categories yet.</p>
        ) : (
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-50 text-gray-500">
              <tr>
                <th className="px-6 py-3 font-medium">ID</th>
                <th className="px-6 py-3 font-medium">Name</th>
                <th className="px-6 py-3 font-medium">Created</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {categories.map((category) => (
                <tr key={category.id_category}>
                  <td className="px-6 py-3 text-gray-500">
                    {category.id_category}
                  </td>
                  <td className="px-6 py-3 font-medium text-gray-800">
                    {category.name}
                  </td>
                  <td className="px-6 py-3 text-gray-500">
                    {new Date(category.created_at).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default AdminCategories;
