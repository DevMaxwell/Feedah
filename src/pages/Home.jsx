import React from "react";
import Common from "../components/Common";
import Vegie from "../components/Vegie";
import Category from "../components/Category";
import Search from "../components/Search";
import Logo from "../components/Logo";

function Home() {
  const customMarg = {
    margin: "0% 20%",
  };
  return (
    <div style={customMarg}>
      <Logo />
      <Search />
      <Category />

      <Vegie />
      <Common />
    </div>
  );
}

export default Home;
