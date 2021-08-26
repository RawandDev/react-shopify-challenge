import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import MoviesList from "./components/MoviesList";
import useAxios from "./components/hooks/useAxios";
import Search from "./components/Search";
import Header from "./components/Header";
import Nomination from "./components/Nomination";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    AOS.refresh();
  }, []);
  const { response, loading, setQuery, setLoading } = useAxios();

  function queryHandler(q) {
    setQuery(q);
  }
  function loadingHandler(l) {
    setLoading(l);
  }

  return (
    <main>
      <Header />
      <Search queryHandler={queryHandler} loadingHandler={loadingHandler} />
      <div className="flex">
        <MoviesList data={response} loading={loading} />
        <Nomination />
      </div>
    </main>
  );
}

export default App;
