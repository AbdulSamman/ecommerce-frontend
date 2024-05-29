import "./styles/App.scss";
import { PageAboutUs } from "./pages/PageAboutUs";
import { PageProducts } from "./pages/PageProducts";
import { PageSupport } from "./pages/PageSupport";
import { LandingPage } from "./components/LandingPage";
import { LandingPage2 } from "./components/LandingPage2";
import { NavLink, Route, Routes, Navigate, Link } from "react-router-dom";
import { Footer } from "./components/Footer";

export const App = () => {
  return (
    <>
      <div className="App">
        <div className="header">
          <h1>
            <Link to="/">Online Shop</Link>
          </h1>
          <nav>
            <NavLink to={"/products"}>products</NavLink>
            <NavLink to={"/support"}>support</NavLink>
            <NavLink to={"/aboutUs"}>about us</NavLink>
          </nav>
        </div>

        <Routes>
          <Route path="/products" element={<PageProducts />} />
          <Route path="/support" element={<PageSupport />} />
          <Route path="/aboutUs" element={<PageAboutUs />} />
          <Route path="*" element={<Navigate to={"/"} replace />} />
        </Routes>

        <>
          <LandingPage />
          <LandingPage2 />
          <Footer />
        </>
      </div>
    </>
  );
};
