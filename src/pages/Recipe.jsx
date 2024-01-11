import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import Logo from "../components/Logo";
import Search from "../components/Search";
import Category from "../components/Category";
import Footer from "../components/Footer";

const Recipe = () => {
  let params = useParams();

  const apiKey = process.env.REACT_APP_API_KEY;

  const [detailedInfo, setDetailedInfo] = useState({});

  const [activeTab, setActiveTab] = useState("instructions");

  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${apiKey}`
    );
    const detailData = await data.json();
    setDetailedInfo(detailData);
    console.log(detailData);
  };

  useEffect(() => {
    fetchDetails();
  }, [params.name]);

  return (
    <Wrapper>
      <Logo />
      <Search />
      <DetailWrapper>
        <div key={detailedInfo.id}>
          <h2>{detailedInfo.title}</h2>
          <img src={detailedInfo.image} alt={detailedInfo.title} />
        </div>
        <Info>
          <Button
            className={activeTab === "instructions" ? "active" : ""}
            onClick={() => {
              setActiveTab("instructions");
            }}
          >
            Instructions
          </Button>
          <Button
            className={activeTab === "ingredients" ? "active" : ""}
            onClick={() => {
              setActiveTab("ingredients");
            }}
          >
            Ingredients
          </Button>
          {activeTab === "instructions" && (
            <div>
              <h4
                dangerouslySetInnerHTML={{ __html: detailedInfo.summary }}
              ></h4>
              <h4
                dangerouslySetInnerHTML={{ __html: detailedInfo.instructions }}
              ></h4>
            </div>
          )}

          {activeTab === "ingredients" && (
            <ul>
              {detailedInfo.extendedIngredients.map((item) => (
                <li key={item.id}>{item.original}</li>
              ))}
            </ul>
          )}
        </Info>
      </DetailWrapper>
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 0% 20%;
`;

const DetailWrapper = styled.div`
  text-align: left;
  color: #f27121;
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;
  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
  h2 {
    margin-bottom: 2rem;
  }
  li {
    font-size: 1.2rem;
    line-height: 2.4rem;
  }
  ul {
    margin-top: 2rem;
  }
  img {
    width: 15rem;
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 1rem;
  margin-bottom: 2rem;
  font-weight: 600;
`;

const Info = styled.div`
  margin-left: 10rem;
`;

export default Recipe;
