import { useState, useEffect } from "react";
import axios from "axios";

const useAxios = (axiosParams) => {
  const [response, setResponse] = useState(undefined);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");

  const baseURL = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${query}`;
  axios.defaults.baseURL = `${baseURL}`;
  const fetchData = async (params) => {
    setLoading(true);
    try {
      const result = await axios.request(params);
      setResponse(result.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(axiosParams);
  }, [axiosParams, query]); // execute when query changes

  return { response, error, loading, setQuery, setLoading };
};

export default useAxios;