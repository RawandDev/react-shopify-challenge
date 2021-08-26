import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import MoviesList from "./components/MoviesList";
import useAxios from "./components/hooks/useAxios";
import Search from "./components/Search";
import Header from "./components/Header";

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
      {/* <h1 className="p-12 text-2xl font-bold text-center" data-aos="fade-up">
        Search and Nominate movies you like
      </h1> */}
      <Header />
      <Search queryHandler={queryHandler} loadingHandler={loadingHandler} />
      <MoviesList data={response} loading={loading} />
    </main>
  );
}

export default App;
