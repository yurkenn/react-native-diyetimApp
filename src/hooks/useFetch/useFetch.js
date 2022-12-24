import {useState, useEffect} from 'react';
import axios from 'axios';
import Config from 'react-native-config';

const useFetch = url => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url, {
          params: {
            ingr: 'chicken',
          },
          headers: {
            'X-RapidAPI-Host': Config.API_HOST,
            'X-RapidAPI-Key': Config.API_KEY,
          },
        });
        setData(response.data);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return {data, loading, error};
};

export default useFetch;
