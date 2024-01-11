import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";

function Vegie() {
  const [vegie, setVegie] = useState([]);

  useEffect(() => {
    getVegie();
  }, []);

  //https://api.spoonacular.com/recipes/random?apiKey=52efd6e2bab54c2b9f2a8b8845af7c75&number=9
  const getVegie = async () => {
    const check = localStorage.getItem("vegie");

    if (check) {
      setVegie(JSON.parse(check));
    } else {
      const apiKey = process.env.REACT_APP_API_KEY;
      console.log("API Key:", apiKey);
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=9&tags=vegetarian`
      );
      const data = await api.json();
      localStorage.setItem("vegie", JSON.stringify(data.recipes));
      setVegie(data.recipes);
      console.log(data);
    }
  };
  return (
    <div>
      <Wrapped>
        <h3>Vegies 4U</h3>
        <Splide
          options={{
            perPage: 3,
            //arrows: false,
            pagination: false,
            drag: "free",
            gap: "5rem",
          }}
        >
          {vegie.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <Card>
                  <Link to={"/recipe/" + recipe.id}>
                    <p>{recipe.title}</p>
                    <img src={recipe.image} alt={recipe.title} />
                    <Gradient />
                  </Link>
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
  h3 {
    padding: 5px;
    font-size: 1rem;
    background: linear-gradient(to right, #e94057, #f27121);
    border-radius: 3px;
    color: white;
  }
`;

const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;

  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    overflow: hidden;
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
  background: linear-gradient(35deg, #494949, #313131);
  opacity: 0.5;
  border-radius: 2rem;
`;

export default Vegie;
