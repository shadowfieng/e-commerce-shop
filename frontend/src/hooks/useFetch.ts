import { useCallback, useEffect } from "react";
import { useState } from "react";
import { API_URL } from "../api/config";

type ReturnValue<T> = {
  data: T | undefined;
  loading: boolean;
  error: boolean;
  fetchData: (params?: any) => Promise<T | undefined>;
};

export const useFetch = <T>(
  url: string,
  loadOnMount: boolean = true
): ReturnValue<T> => {
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const fetchData = useCallback(
    async (params?: any): Promise<T | undefined> => {
      setLoading(true);
      try {
        const response = await fetch(`${API_URL}/${url}`, params);
        const data = await response.json();
        setData(data);
        return data;
      } catch (error) {
        setError(true);
        console.error(error);
      } finally {
        setLoading(false);
      }
    },
    [url]
  );

  useEffect(() => {
    // const controller = new AbortController();
    // const signal = controller.signal;

    if (!loadOnMount) return;

    fetchData();
  }, [fetchData]);

  return { data, loading, error, fetchData };
};
