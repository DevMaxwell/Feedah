import React from "react";
import Logo from "../components/Logo";
import Search from "../components/Search";
import Category from "../components/Category";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Footer from "../components/Footer";

const Searched = () => {
  const customMarg = {
    margin: "0% 20%",
  };
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  let params = useParams();

  // make fecth call with the params of ":search" passed from the route
  const getSearchedRecipes = async (search) => {
    const apiKey = process.env.REACT_APP_API_KEY;
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${search}`
    );
    const recipes = await data.json();
    setSearchedRecipes(recipes.results);
  };
  useEffect(() => {
    getSearchedRecipes(params.search);
    console.log(params.search);
  }, [params.search]);

  return (
    <div style={customMarg}>
      <Logo />
      <Search />
      <Category />
      <Grid>
        {searchedRecipes.map((item) => {
          return (
            <Card key={item.id}>
              <img src={item.image} alt={item.image} />
            </Card>
          );
        })}
      </Grid>
      <Footer />
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

export default Searched;
