import React from "react";

function Common() {
  const getCommon = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apikey=${process.env.FEEDAH_API_KEY}`
    );
    const data = await api.json();
    console.log(data);
  };
  return <div></div>;
}

export default Common;
