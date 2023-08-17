import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Home from "./pages/home/Home";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Register from "./pages/register/Register";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import LogIn from "./pages/login/LogIn";
// import "./App.css";

function App() {
  const Layout = () => {
    return (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    );
  };
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Layout />}
        >
          <Route
            index
            element={<Home />}
          />

          <Route
            path="login"
            element={<LogIn />}
          />
          <Route
            path="register"
            element={<Register />}
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
