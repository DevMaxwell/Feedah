import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import Category from "../components/Category";
import Search from "../components/Search";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Logo from "../components/Logo";

const Cuisine = () => {
  const customMarg = {
    margin: "0% 20%",
  };
  const [cuisine, setCuisine] = useState([]);
  let params = useParams();

  const getCuisine = async (name) => {
    const apiKey = process.env.REACT_APP_API_KEY;
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&cuisine=${name}`
    );
    const recipes = await data.json();
    setCuisine(recipes.results);
  };

  useEffect(() => {
    getCuisine(params.type);
    console.log(params.type);
  }, [params.type]);
  return (
    <div tyle={customMarg}>
      <Logo />
      <Search />
      <Category />
      <Grid>
        {cuisine.map((item) => {
          return (
            <Card key={item.id}>
              <img src={item.image} alt='' />
              <h4>{item.title}</h4>
            </Card>
          );
        })}
      </Grid>
    </div>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-column: repeat(auto-fit, minmax(20rem, 1fr));
  grid-grap: 3rem;
`;

const Card = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
  }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }
`;

export default Cuisine;
