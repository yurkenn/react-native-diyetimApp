import {useState, useEffect, useCallback} from 'react';
import axios from 'axios';

const useFetch = url => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      const {data: response} = await axios.get(url, {
        headers: {
          'x-app-id': 'eab7e237',
          'x-app-key': 'ce3f08acd177decd14304e2dcb3df1b7',
          'x-remote-user-id': '0',
        },
      });
      setData(response);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {data, loading, error};
};

export default useFetch;
