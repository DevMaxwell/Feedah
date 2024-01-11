import React, { useState } from "react";
import { styled } from "styled-components";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <FormStyle>
      <div>
        <FaSearch></FaSearch>
        <input type='text' />
      </div>
    </FormStyle>
  );
};

const FormStyle = styled.form`
  padding-top: 1rem;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;

  div {
    width: 100%;
    position: relative;
  }
  input {
    width: 100%;
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
    padding: 1rem 3rem;
    border: none;
    border-radius: 1rem;
    outline: none;
  }
  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
  }
`;

export default Search;
