import React from "react";
import useAxios from "./components/hooks/useAxios";
import MoviesList from "./components/MoviesList";
import Search from "./components/Search";

function App() {
  const { response, loading, setQuery, setLoading } = useAxios();

  function queryHandler(q) {
    setQuery(q);
  }

  function loadingHandler(l) {
    setLoading(l);
  }

  console.log(typeof response);

  console.log(response, loading);
  return (
    <div>
      <Search queryHandler={queryHandler} loadingHandler={loadingHandler} />
      <MoviesList data={response} loading={loading} />
    </div>
  );
}

export default App;
