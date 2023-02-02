import axios from "axios";

const getCatagories = async () => {
  const response = await axios.get(
    "https://fakestoreapi.com/products/categories"
  );

  return response.data;
};

const products = async () => {
  const response = await axios.get("https://fakestoreapi.com/products");
  return response.data;
};

export { getCatagories, products };
