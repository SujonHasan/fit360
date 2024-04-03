import Protected from "@/src/containers/layout/protected";
import Products from "@/src/containers/work-space/products";

const ProductsPage = () => {
  return (
    <Protected>
      <Products />
    </Protected>
  );
};

export default ProductsPage;
