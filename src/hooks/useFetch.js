import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { CardContext } from 'context';

const useFetch = (endPoint, page, ids) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { globalError, setGlobalError } = useContext(CardContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = endPoint;
        if (page > 1) {
          url = `${endPoint}?page=${page}`;
        } else if (page === -1) {
          url = `${endPoint}/${ids}`;
        }

        const response = await axios.get(url);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setGlobalError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [endPoint, page]);

  return { data, loading, error };
};

export default useFetch;
