import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import Footer from "./Footer";
import "./App.css";
require("dotenv").config();

function App() {
  console.log(process.env);
  const APP_ID = "4478dc68";
  const APP_KEY = "8360109cd9b203fe4da5f425e4480309";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    const getRecipes = async () => {
      const response = await fetch(
        `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      const data = await response.json();
      setRecipes(data["hits"]);
    };
    getRecipes();
  }, [query]);

  const changeInput = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <form className="search-form" onSubmit={getSearch}>
        <input
          className="search-bar"
          type="text"
          placeholder="Search for the ingredient"
          value={search}
          onChange={changeInput}
        ></input>
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="recipes">
        {recipes.map((recipe) => (
          <Recipe
            key={recipe["recipe"]["label"]}
            title={recipe["recipe"]["label"]}
            calories={recipe["recipe"]["calories"]}
            image={recipe["recipe"]["image"]}
            ingredients={recipe["recipe"]["ingredients"]}
            url={recipe["recipe"]["url"]}
          ></Recipe>
        ))}
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
