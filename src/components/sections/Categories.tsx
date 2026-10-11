import { useMemo } from "react";

import Container from "../common/Container";
import Heading from "../common/Heading/Heading";
import CategoryCard from "../categories/CategoryCard";
import useCatalog from "../../hooks/useCatalog";
import { categories as staticCategories } from "../../data/categories";
import placeholderImage from "../../assets/images/placeholder.svg";
import type { Category } from "../../types/category";

const Categories = () => {
  const { products, categories, isLoading, error } = useCatalog();

  const categoryCards = useMemo<Category[]>(
    () =>
      categories.map((category) => {
        const slug = category.name.toLowerCase();
        const productImage = products.find(
          (product) =>
            product.category === category.name && product.images?.length,
        )?.image;
        const fallbackImage = staticCategories.find(
          (staticCategory) => staticCategory.slug === slug,
        )?.image;

        return {
          id: category.id_category,
          name: category.name,
          slug,
          image: productImage ?? fallbackImage ?? placeholderImage,
        };
      }),
    [categories, products],
  );

  return (
    <section className="py-16">
      <Container>
        <Heading
          title="Shop by Category"
          subtitle="Discover our beautifully handcrafted collection for Laddu Gopal Ji."
        />

        {isLoading ? (
          <p className="mt-10 text-center text-gray-500">
            Loading categories...
          </p>
        ) : error ? (
          <p className="mt-10 text-center text-red-600">{error}</p>
        ) : (
          <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
            {categoryCards.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        )}
      </Container>
    </section>
  );
};

export default Categories;
