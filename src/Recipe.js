import React from "react";
import "./Recipe.css";

function Recipe({ title, calories, image, ingredients, url }) {
  return (
    <div className="title">
      <h1>{title}</h1>
      <ol>
        {ingredients.map((ingredient) => (
          <li key={ingredient.text}>{ingredient.text}</li>
        ))}
      </ol>
      <p>
        <b>{Math.round(calories) + " calories"}</b>
      </p>
      <a href={url} target="_blank" rel="noreferrer" className="img_link">
        <img className="img" src={image} alt=""></img>
      </a>
    </div>
  );
}

export default Recipe;
