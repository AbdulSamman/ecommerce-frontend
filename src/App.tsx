import "./styles/App.scss";
import { PageAboutUs } from "./pages/PageAboutUs";
import { PageProducts } from "./pages/PageProducts";
import { PageSupport } from "./pages/PageSupport";
import { PageWelcome } from "./pages/PageWelcome";
import { NavLink, Route, Routes, Navigate, Link } from "react-router-dom";
export const App = () => {
  return (
    <>
      <div className="App">
        <h1>
          <Link to="/">Online Shop</Link>
        </h1>
        <nav>
          <NavLink to={"/welcome"}>welcome</NavLink>
          <NavLink to={"/products"}>products</NavLink>
          <NavLink to={"/support"}>support</NavLink>
          <NavLink to={"/aboutUs"}>about us</NavLink>
        </nav>
      </div>
      <div className="line"> </div>
      <Routes>
        <Route path="/welcome" element={<PageWelcome />} />
        <Route path="/products" element={<PageProducts />} />
        <Route path="/support" element={<PageSupport />} />
        <Route path="/aboutUs" element={<PageAboutUs />} />

        <Route path="*" element={<Navigate to={"/welcome"} replace />} />
      </Routes>
    </>
  );
};
