import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Logo = () => {
  const customStyle = {
    color: "#f27121",
  };
  return (
    <LinkWrapper>
      <SSlink to={"/cuisine"}>
        <h1>
          Fee<i style={customStyle}>dah</i>
        </h1>
      </SSlink>
    </LinkWrapper>
  );
};

const LinkWrapper = styled.div`
  text-decoration: none;
  color: black;
`;
const SSlink = styled(Link)`
  text-decoration: none;
  color: #494949;
`;

export default Logo;
