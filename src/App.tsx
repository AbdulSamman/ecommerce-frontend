import "./styles/App.scss";
import { PageAboutUs } from "./pages/PageAboutUs";
import { PageProducts } from "./pages/PageProducts";
import { PageSupport } from "./pages/PageSupport";

import { NavLink, Route, Routes, Navigate, Link } from "react-router-dom";
import { Footer } from "./components/Footer";
import { PageWelcome } from "./pages/PageWelcome";

export const App = () => {
  return (
    <>
      <div className="App">
        <div className="header">
          <h1>
            <Link to="/welcome">Online Shop</Link>
          </h1>
          <nav>
            <NavLink to={"/products"}>products</NavLink>
            <NavLink to={"/support"}>support</NavLink>
            <NavLink to={"/aboutUs"}>about us</NavLink>
          </nav>
        </div>

        <Routes>
          <Route path="/welcome" element={<PageWelcome />} />
          <Route path="/products" element={<PageProducts />} />
          <Route path="/support" element={<PageSupport />} />
          <Route path="/aboutUs" element={<PageAboutUs />} />
          <Route path="*" element={<Navigate to={"/welcome"} replace />} />
        </Routes>

        <>
          <Footer />
        </>
      </div>
    </>
  );
};
