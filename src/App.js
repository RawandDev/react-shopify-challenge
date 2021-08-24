import React from "react";
import useAxios from "./components/hooks/useAxios";
import Search from "./components/Search";

function App() {
  const { response, loading, setQuery } = useAxios();

  function queryHandler(q) {
    setQuery(q);
  }

  console.log(response, loading);
  return (
    <div>
      <Search queryHandler={queryHandler} />
      <h1 className="bg-green-400">Hello</h1>
    </div>
  );
}

export default App;
