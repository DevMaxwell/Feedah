import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import Category from "../components/Category";
import Search from "../components/Search";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Logo from "../components/Logo";
import Footer from "../components/Footer";

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
    <div style={customMarg}>
      <Logo />
      <Search />
      <Category />
      <Grid>
        {cuisine.map((item) => {
          return (
            <Link to={"/recipe/" + item.id}>
              <Card key={item.id}>
                <img src={item.image} alt='' />
                <h4>{item.title}</h4>
              </Card>
            </Link>
          );
        })}
      </Grid>
      <Footer />
    </div>
  );
};

const Grid = styled.div`
  text-decoration: none;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;

  & > * {
    flex-basis: calc(33.33% - 10px);
    margin-bottom: 10px;
  }
`;

const Card = styled.div`
  text-decoration: none;
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
