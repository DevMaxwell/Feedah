import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

function Common() {
  const [common, setCommon] = useState([]);

  useEffect(() => {
    getCommon();
  }, []);

  //https://api.spoonacular.com/recipes/random?apiKey=52efd6e2bab54c2b9f2a8b8845af7c75&number=9
  const getCommon = async () => {
    const check = localStorage.getItem("common");

    if (check) {
      setCommon(JSON.parse(check));
    } else {
      const apiKey = process.env.REACT_APP_API_KEY;
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=9`
      );
      const data = await api.json();
      localStorage.setItem("common", JSON.stringify(data.recipes));
      setCommon(data.recipes);
      console.log(data);
    }
  };
  return (
    <div>
      <Wrapped>
        <h4>Trending picks</h4>
        <Splide
          options={{
            perPage: 3,
            //arrows: false,
            pagination: false,
            drag: "free",
            gap: "5rem",
          }}
        >
          {common.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <Card>
                  <p>{recipe.title}</p>
                  <img src={recipe.image} alt={recipe.title} />
                  <Gradient />
                </Card>
              </SplideSlide>
            );
          })}
        </Splide>
      </Wrapped>
    </div>
  );
}

const Wrapped = styled.div`
  margin: 4rem 0rem;
`;

const Card = styled.div`
  min-height: 35rem;
  border-radius: 2rem;
  overflow: hidden;

  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0 0 0.5));
`;

export default Common;
