import Header from "../../components/header/Header";
import Hero from "../../components/hero/Hero";
import About from "../about/About";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      {/* <Header /> */}
      <Hero />
      <About />
    </div>
  );
};

export default Home;
