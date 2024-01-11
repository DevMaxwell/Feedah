import React from "react";
import styled from "styled-components";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <FooterContainer>
        <p>&copy; {currentYear} DevMaxwell</p>
      </FooterContainer>
    </div>
  );
};

const FooterContainer = styled.footer`
  background: linear-gradient(35deg, #313131, #494949);
  color: #fff;
  text-align: center;
  border-radius: 1rem;
  padding: 10px;
`;

export default Footer;
