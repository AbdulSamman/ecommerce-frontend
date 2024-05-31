import "./styles/App.scss";
import { PageAboutUs } from "./pages/PageAboutUs";
import { PageProducts } from "./pages/PageProducts";
import { PageSupport } from "./pages/PageSupport";
import { NavLink, Route, Routes, Navigate, Link } from "react-router-dom";
import { Footer } from "./components/Footer";
import { PageWelcome } from "./pages/PageWelcome";
import { AiOutlineMenu } from "react-icons/ai";
import { BsXLg } from "react-icons/bs";
import { useState } from "react";

export const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "visible";
    }
  };

  return (
    <>
      <div
        className="App"
        onClick={() => {
          isMenuOpen && setIsMenuOpen(false);
        }}>
        <div className="burgerMenu" onClick={handleMenuOpen}>
          {!isMenuOpen ? (
            <AiOutlineMenu className="menuIcon" />
          ) : (
            <BsXLg className="menuIcon" />
          )}
        </div>
        <div className="row">
          <NavLink to="/" className="logo">
            <h1>Online Shop</h1>
          </NavLink>
          <nav className={`menu ${isMenuOpen ? "menuOpen" : ""}`}>
            <div className="navRow">
              <NavLink to={"/products"}>products</NavLink>
              <NavLink to={"/support"}>support</NavLink>
              <NavLink to={"/aboutUs"}>about us</NavLink>
            </div>
          </nav>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<PageWelcome />} />
        <Route path="/products" element={<PageProducts />} />
        <Route path="/support" element={<PageSupport />} />
        <Route path="/aboutUs" element={<PageAboutUs />} />
        <Route path="*" element={<Navigate to={"/"} replace />} />
      </Routes>

      <>
        <Footer />
      </>
    </>
  );
};
