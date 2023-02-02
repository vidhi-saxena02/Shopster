import ProductCard from "./ProductCard";

function Products({ product }) {
  console.log("Products", product);
  const renderedProduct = product.map((prod) => {
    return (
      <div key={prod.id}>
        <ProductCard
          title={prod.title}
          price={prod.price}
          image={prod.image}
          category={prod.category}
        />
      </div>
    );
  });
  return (
    <div>
      <div className="text-2xl font-semibold ml-10">
        Weekly Popular Products
      </div>
      <div className="flex flex-row justify-between mt-10">
        {renderedProduct}
      </div>
    </div>
  );
}

export default Products;
