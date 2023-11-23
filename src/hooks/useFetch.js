import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (endPoint, page, ids) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = endPoint;
        if (page > 1) {
          url = `${endPoint}?page=${page}`;
        } else if (page === -1) {
          url = `${endPoint}/${ids}`;
          console.log('Hola')
          console.log(url);
        }

        const response = await axios.get(url);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [endPoint, page]);

  return { data, loading, error };
};

export default useFetch;
