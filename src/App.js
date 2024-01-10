import "./App.css";
import Category from "./components/Category";
import Pages from "./pages/Pages";
import { BrowserRouter } from "react-router-dom";

function App() {
  const customStyle = {
    color: "#f27121",
  };
  return (
    <div className='App'>
      <h1>
        Fee<i style={customStyle}>dah</i>
      </h1>
      <BrowserRouter>
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
