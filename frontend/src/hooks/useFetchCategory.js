import {useState, useEffect} from "react"
import axios from "axios";

export const useFetchCategory = (category) => {

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);

      useEffect(() => {
        const fetchCategories = async () => {
        try {
          setLoading(true);
          setError(false);

          const { data } = await axios.get(
            `/api/products/category/${category}`
          );
          setData(data);
          setLoading(false);
        } catch (error) {
          console.log(error);
          setError(error);
        }
      }
      fetchCategories();
    }, [category]);

   

    return { loading, error, data };
  };