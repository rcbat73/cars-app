import { useState, useEffect } from "react";
import axios from "axios";

export default function useRequest(url) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const request = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(url);
        if (isMounted) {
          setData(response.data);
        }
      } catch (err) {
        if (isMounted) {
          setError(err);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };
    if (isMounted) {
      request();
    }
    return () => {
      isMounted = false;
    };
  }, [url]);

  return { data, error, isLoading };
}
