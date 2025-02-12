import React from "react";
import { useState } from "react";
import { useCategoriesDataContext } from "../contexts/CategoriesDataContext";
import axios from "axios";

export default function SearchBar() {
  const [search, setSearch] = useState("");

  const { setMovies, setSeries } = useCategoriesDataContext();

  const handleSearch = (e) => {
    e.preventDefault();
    // Get movies

    axios
      .get("https://api.themoviedb.org/3/search/movie", {
        params: {
          api_key: "f8a49a9cb468145b7722dd6220ba2269",
          language: "it-IT",
          query: search,
        },
      })
      .then((res) => setMovies(res.data.results));

    // Get Series
    axios
      .get("https://api.themoviedb.org/3/search/tv", {
        params: {
          api_key: "f8a49a9cb468145b7722dd6220ba2269",
          language: "it-IT",
          query: search,
        },
      })
      .then((res) => setSeries(res.data.results));
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        name="search"
        type="search"
        placeholder="Cerca..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit">Cerca</button>
    </form>
  );
}
