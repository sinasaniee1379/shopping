import axios from "axios";

const BaseUrl = "https://fakestoreapi.com";

export const getProduct = async () => {
  const response = await axios.get(`${BaseUrl}/products`);
  return response.data;
};
