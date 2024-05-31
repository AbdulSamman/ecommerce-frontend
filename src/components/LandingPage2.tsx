import { useContext, useEffect, useState } from "react";
import { AppContext } from "../AppContext";
import facebookTimg from "/images/facebookT.png";
import ebayTimg from "/images/ebayT.png";
import amazonTimg from "/images/amazonT.png";
import mobileImg from "/images/mobile.png";
import tabletImg from "/images/tablet.png";
import facebookMimg from "/images/facebookM.png";
import ebayMimg from "/images/ebayM.png";
import amazonMimg from "/images/amazonM.png";

import "../styles/pages/landingPage2.scss";

const tabletImages = [`${facebookTimg}`, `${ebayTimg}`, `${amazonTimg}`];

const mobileImages = [`${facebookMimg}`, `${ebayMimg}`, `${amazonMimg}`];

export const LandingPage2: React.FC = () => {
  const { rotateBox, positionImg } = useContext(AppContext);
  const [currentImages, setCurrentImages] = useState(0);

  // change images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImages((index) => (index + 1) % mobileImages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [mobileImages.length]);

  return (
    <>
      <div className="landingPage2">
        <section
          className="imagesContainer"
          style={{
            transform: `rotateZ(${rotateBox}deg)`,
          }}>
          <div className="mobile" style={{ top: `${positionImg + 5}%` }}>
            <img src={mobileImg} alt="mobile" />
            <img src={mobileImages[currentImages]} alt="imagesArr" />
          </div>
          <div className="tablet" style={{ top: `${positionImg}%` }}>
            <img src={tabletImg} alt="tabletImg" />
            <img src={tabletImages[currentImages]} alt="tablet" />
          </div>
        </section>

        <section
          className="textLeftContainer"
          style={{
            transform: `rotateZ(${rotateBox}deg)`,
          }}>
          <h1>Your first sale is only a few clicks away</h1>
          <p>
            The easiest way to sell anything — products, services, digital
            goods, subscriptions — without coding, developers, designers. Manage
            everything in one place — from your desk or on-the-go. Just sign up
            and start building your dream.
          </p>
          <div className="row">
            <span className="logo">Logo</span>
            <span>2023 TOP PERFORMER. Small Business eCommerce Software</span>
          </div>
          <button>Get started for free</button>
        </section>
      </div>
    </>
  );
};
