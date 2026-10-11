import { Link } from "react-router-dom";

import type { Category } from "../../types/category";

interface CategoryCardProps {
  category: Category;
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  return (
    <Link
      to={`/products?category=${encodeURIComponent(category.name)}`}
      className="group block overflow-hidden rounded-xl border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      <img
        src={category.image}
        alt={category.name}
        className="h-52 w-full object-cover transition-transform duration-300 group-hover:scale-105"
      />

      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold">{category.name}</h3>
      </div>
    </Link>
  );
};

export default CategoryCard;
