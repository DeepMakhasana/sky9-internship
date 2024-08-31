import { useCallback, useEffect, useState } from "react";
import { Axios } from "../utils/axios.ts";

const useFetchData = (url: string) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const getData = useCallback(async () => {
    const { data, status } = await Axios.get(url);
    console.log(data);
    setIsLoading(false);
    if (status === 200) {
      setData(data);
      return true;
    }
    setError(data.message);
    return false;
  }, [url]);

  useEffect(() => {
    (async () => {
      await getData();
    })();
  }, [getData]);
  return { data, isLoading, error };
};

export default useFetchData;
