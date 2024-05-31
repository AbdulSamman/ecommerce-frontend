import { useContext } from "react";
import { AppContext } from "../AppContext";
import "../styles/pages/landingPage.scss";
import { subtitle } from "../interfaces";

const colors = ["red", "blue", "cyan", "green", "purple", "yellow", "orange"];

export const LandingPage: React.FC = () => {
  const { currentSubtitle, rotateBox } = useContext(AppContext);

  return (
    <>
      <div className="landingPage">
        <section className="title">
          <h1>
            Start Selling
            <span>
              {currentSubtitle !== subtitle.length - 1 && <span>on </span>}
              <span
                className="subtitle"
                style={{ color: `${colors[currentSubtitle]}` }}>
                <>
                  {currentSubtitle !== subtitle.length - 1 ? (
                    <>{subtitle[currentSubtitle]}</>
                  ) : (
                    <>{subtitle[currentSubtitle]}</>
                  )}
                </>
              </span>
            </span>
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
            height: `${140 + rotateBox}%`,
          }}></section>
      </div>
    </>
  );
};
