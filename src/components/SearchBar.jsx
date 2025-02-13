import React from "react";
import { useState, useEffect } from "react";
import { useCategoriesDataContext } from "../contexts/CategoriesDataContext";
import axios from "axios";

export default function SearchBar() {
  const [search, setSearch] = useState("");

  const { setMovies, setSeries } = useCategoriesDataContext();

  //Movies

  const fetchMovies = async () => {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/search/movie",
        {
          params: {
            api_key: "f8a49a9cb468145b7722dd6220ba2269",
            query: search || "star wars",
          },
        }
      );
      setMovies(response.data.results);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  // Series

  const fetchSeries = async () => {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/search/tv",
        {
          params: {
            api_key: "f8a49a9cb468145b7722dd6220ba2269",
            query: search || "star wars",
          },
        }
      );
      setSeries(response.data.results);
    } catch (error) {
      console.error("Error fetching series:", error);
    }
  };

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

  useEffect(() => {
    fetchSeries();
    fetchMovies();
  }, []);

  return (
    <form onSubmit={handleSearch} className="flex gap-3.5">
      <input
        name="search"
        type="search"
        placeholder="Cerca..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="bg-white p-1.5 rounded-2xl"
      />
      <button
        className="bg-red-600 px-3.5 py-1 text-white font-medium rounded-2xl cursor-pointer"
        type="submit"
      >
        Cerca
      </button>
    </form>
  );
}
