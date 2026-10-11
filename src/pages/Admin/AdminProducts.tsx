import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { getProductImageUrl, getProducts } from "../../services/productService";
import type { ApiProduct } from "../../types/admin";

const AdminProducts = () => {
  const location = useLocation();
  const successMessage = location.state?.message as string | undefined;

  const [products, setProducts] = useState<ApiProduct[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getProducts()
      .then(setProducts)
      .catch((error: Error) => setError(error.message))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-800">Products</h1>

        <Link
          to="/admin/products/new"
          className="rounded-xl bg-amber-600 px-5 py-2.5 font-medium text-white shadow-md transition hover:bg-amber-700"
        >
          + New product
        </Link>
      </div>

      {successMessage && (
        <div
          role="status"
          className="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800"
        >
          {successMessage}
        </div>
      )}

      {error && (
        <div
          role="alert"
          className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600"
        >
          {error}
        </div>
      )}

      <div className="overflow-x-auto rounded-2xl bg-white shadow-sm">
        {isLoading ? (
          <p className="p-6 text-sm text-gray-500">Loading products...</p>
        ) : products.length === 0 ? (
          <p className="p-6 text-sm text-gray-500">No products yet.</p>
        ) : (
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-50 text-gray-500">
              <tr>
                <th className="px-6 py-3 font-medium">Image</th>
                <th className="px-6 py-3 font-medium">Name</th>
                <th className="px-6 py-3 font-medium">Category</th>
                <th className="px-6 py-3 font-medium">Price</th>
                <th className="px-6 py-3 font-medium">Stock</th>
                <th className="px-6 py-3 font-medium">Images</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {products.map((product) => {
                const primaryImage = product.images[0];

                return (
                  <tr key={product.id_product}>
                    <td className="px-6 py-3">
                      {primaryImage ? (
                        <img
                          src={getProductImageUrl(
                            product.id_product,
                            primaryImage.id_image,
                          )}
                          alt={product.name}
                          className="h-14 w-14 rounded-lg object-cover"
                        />
                      ) : (
                        <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-gray-100 text-xs text-gray-400">
                          None
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-3 font-medium text-gray-800">
                      {product.name}
                    </td>
                    <td className="px-6 py-3 text-gray-600">
                      {product.category_name}
                    </td>
                    <td className="px-6 py-3 text-gray-800">
                      ₹ {Number(product.price).toFixed(2)}
                    </td>
                    <td className="px-6 py-3 text-gray-600">
                      {product.stock_quantity}
                    </td>
                    <td className="px-6 py-3 text-gray-600">
                      {product.images.length}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default AdminProducts;
