import axios from "../../../api/axios";
import { useEffect, useState } from "react";


export const useGetData = () => {
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const getCategories = await axios.get("/categories");
        const getBrands = await axios.get("/brands");
        const getProviders = await axios.get("/providers");

        setCategories(getCategories.data);
        setBrands(getBrands.data);
        setProviders(getProviders.data);
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    };

    fetchData();
  }, []);

  return {
    categories,
    brands,
    providers,
  };
};