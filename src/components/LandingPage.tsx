import { useContext } from "react";
import { AppContext } from "../AppContext";
import "../styles/pages/landingPage.scss";
import { subtitle } from "../interfaces";

export const LandingPage: React.FC = () => {
  const { currentSubtitle, rotateBox, positionImg } = useContext(AppContext);

  return (
    <>
      <div className="landingPage">
        <section className="title">
          <h1>
            <span>Start Selling</span>
            <span className="subtitle">{subtitle[currentSubtitle]}</span>
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem
            officia deleniti quas architecto dolorum molestias soluta eum,
            suscipit beatae vitae repudiandae nostrum error, fuga eligendi iure
            provident cumque iusto consectetur?
          </p>
          <button>Get started for free</button>
        </section>
        <section
          className="boxCover"
          style={{
            transform: `rotateZ(${rotateBox}deg)`,
            height: `${120 + rotateBox}%`,
          }}></section>
      </div>
    </>
  );
};
