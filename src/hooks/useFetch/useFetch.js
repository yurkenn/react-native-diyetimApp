import {useState, useEffect} from 'react';
import axios from 'axios';
import Config from 'react-native-config';

const useFetch = url => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [ingr, setIngr] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url, {
          params: {
            ingr: ingr,
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
  }, [url, ingr]);

  return {data, loading, error, setIngr};
};

export default useFetch;
