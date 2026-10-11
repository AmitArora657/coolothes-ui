import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

import Container from "../../components/common/Container";
import ProductGrid from "../../components/products/ProductGrid";
import ProductToolbar from "../../components/products/ProductToolbar";
import useCatalog from "../../hooks/useCatalog";

const Products = () => {
  const { products, categories, isLoading, error } = useCatalog();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const selectedCategory = searchParams.get("category") ?? "All";

  const categoryNames = useMemo(
    () => categories.map((category) => category.name),
    [categories],
  );

  const handleCategoryChange = (category: string) => {
    const nextParams = new URLSearchParams(searchParams);

    if (category === "All") {
      nextParams.delete("category");
    } else {
      nextParams.set("category", category);
    }

    setSearchParams(nextParams, { replace: true });
  };

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === "All" || product.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [products, searchTerm, selectedCategory]);

  return (
    <>
      <ProductToolbar
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        categories={categoryNames}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />

      <section className="pb-20">
        <Container>
          {isLoading ? (
            <p className="text-center text-gray-500">Loading products...</p>
          ) : error ? (
            <p className="text-center text-red-600">{error}</p>
          ) : filteredProducts.length === 0 ? (
            <p className="text-center text-gray-500">No products found.</p>
          ) : (
            <ProductGrid products={filteredProducts} />
          )}
        </Container>
      </section>
    </>
  );
};

export default Products;
