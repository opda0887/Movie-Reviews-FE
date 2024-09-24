import "./App.css";
import api from "./api/axiosConfig";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import { Layout } from "./components/Layout";
import { Home } from "./components/home/Home";
import {Header} from "./components/header/Header";

function App() {
  const [movies, setMovies] = useState();

  const getMovies = async () => {
    try {
      const response = await api.get("/api/v1/movies");
      setMovies(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home movies={movies}/>} />  {/* Edit here */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
