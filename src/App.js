import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import MoviesList from "./components/MoviesList";
import useAxios from "./components/hooks/useAxios";
import Search from "./components/Search";

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

  console.log(typeof response);

  console.log(response, loading);
  return (
    <main
      className="w-screen h-screen"
      style={{
        backgroundImage:
          "url(" +
          "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80" +
          ")",
      }}
    >
      <h1
        className="p-12 text-2xl font-bold text-white  text-center "
        data-aos="fade-up"
      >
        Search for Your favourite Movies
      </h1>
      <Search queryHandler={queryHandler} loadingHandler={loadingHandler} />
      <MoviesList data={response} loading={loading} />
    </main>
  );
}

export default App;
