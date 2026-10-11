import Container from "../common/Container";
import Heading from "../common/Heading/Heading";
import ProductGrid from "../products/ProductGrid";
import useCatalog from "../../hooks/useCatalog";

const FEATURED_COUNT = 8;

const FeaturedProducts = () => {
  const { products, isLoading, error } = useCatalog();

  return (
    <section className="py-16">
      <Container>
        <Heading
          title="Featured Products"
          subtitle="Explore our best-selling Laddu Gopal collection."
        />

        <div className="mt-10">
          {isLoading ? (
            <p className="text-center text-gray-500">Loading products...</p>
          ) : error ? (
            <p className="text-center text-red-600">{error}</p>
          ) : (
            <ProductGrid products={products.slice(0, FEATURED_COUNT)} />
          )}
        </div>
      </Container>
    </section>
  );
};

export default FeaturedProducts;
