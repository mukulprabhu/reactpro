import React, { useCallback, useEffect, useReducer, useState } from "react";
import styles from "./search.module.css";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "e831f1a11eee482d8cb9014d1e8dffdf";

const Search = ({ foodData, setFoodData }) => {
  const [query, setQuery] = useState("Pizza");

  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await res.json();
      setFoodData(data.results);
    }
    fetchFood();
  }, [query]);

  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        className={styles.input}
      />
    </div>
  );
};

export default Search;
