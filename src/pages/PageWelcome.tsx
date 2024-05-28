import { useContext, useEffect, useState } from "react";
import { AppContext } from "../AppContext";
import "../styles/pages/PageWelcome.scss";
import { subtitle } from "../interfaces";
import mobileImg from "/images/mobile.png";
import tabletImg from "/images/tablet.png";
import facebookMimg from "/images/facebookM.png";
import facebookTimg from "/images/facebookT.png";
import ebayMimg from "/images/ebayM.png";
import ebayTimg from "/images/ebayT.png";
import amazonMimg from "/images/amazonM.png";
import amazonTimg from "/images/amazonT.png";

const mobileImages = [`${facebookMimg}`, `${ebayMimg}`, `${amazonMimg}`];

const tabletImages = [`${facebookTimg}`, `${ebayTimg}`, `${amazonTimg}`];

export const PageWelcome = () => {
  const { currentSubtitle, rotateBox } = useContext(AppContext);
  const [currentImages, setCurrentImages] = useState(0);
  // change images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImages((index) => (index + 1) % mobileImages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [mobileImages.length]);

  return (
    <div className="pageWelcome">
      <section className="title">
        <h1>
          <span> Start Selling</span>
          <span>{subtitle[currentSubtitle]}</span>
        </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem officia
          deleniti quas architecto dolorum molestias soluta eum, suscipit beatae
          vitae repudiandae nostrum error, fuga eligendi iure provident cumque
          iusto consectetur?
        </p>
        <button>Get started for free</button>
      </section>
      <section
        className="boxCover"
        style={{ transform: `rotateZ(${rotateBox}deg)` }}>
        <div className="mobile">
          <img src={mobileImg} alt="mobile" />
          <img src={mobileImages[currentImages]} alt="imagesArr" />
        </div>
        <div className="tablet">
          <img src={tabletImg} alt="tabletImg" />
          <img src={tabletImages[currentImages]} alt="tablet" />
        </div>
      </section>
    </div>
  );
};
