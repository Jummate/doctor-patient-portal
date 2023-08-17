import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Home from "./pages/home/Home";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
