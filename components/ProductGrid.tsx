import { Product } from "@/sanity.types";

function ProductGrid({ products }: { products: Product[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
      {products?.map((product) => {
        return <ProductThumbnail key={product._id} product={product} />;
      })}
    </div>
  );
}

export default ProductGrid;
