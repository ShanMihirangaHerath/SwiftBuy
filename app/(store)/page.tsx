import { Button } from "@/components/ui/button";
import { getAllProducts } from "@/sanity/lib/products/getAllProducts";

export default async function Home() {
  const products = await getAllProducts();

  // console.log(
  //   crypto.randomUUID().slice(0, 5) +
  //   `>>> Rerendered the home page cache with ${products.length} products and ${getEnabledCategories.length} categories`
  // );

  return (
    <div>
      <h1>Hello World!</h1>

      {/* render the all products */}
      <Button>Login</Button>
    </div>
  );
}
