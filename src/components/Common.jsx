import React, { useEffect } from "react";

function Common() {
  useEffect(() => {
    getCommon();
  }, []);

  const getCommon = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apikey=${process.env.FEEDAH_API_KEY}&number=9`
    );
    const data = await api.json();
    console.log(data);
  };
  return <div></div>;
}

export default Common;
