import NavBar from "../components/NavBar";
import Banner from "../components/Banner";
import { useState, useEffect } from "react";
import { getCatagories, products } from "../api";

import CatagoryList from "../components/Catagory";
import Products from "../components/Products";

function HomePage() {
  const [catagories, setCatagories] = useState([]);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetchProducts();
    fetchCatagories();
  }, []);

  const fetchCatagories = async () => {
    const result = await getCatagories();
    setCatagories(result);
  };

  const fetchProducts = async () => {
    const result = await products();
    // console.log(result);
    setProduct(result);
  };

  return (
    <div className="w-full h-full">
      <NavBar />
      <Banner />
      <CatagoryList catagories={catagories} />

      <Products product={product} />
    </div>
  );
}

export default HomePage;
