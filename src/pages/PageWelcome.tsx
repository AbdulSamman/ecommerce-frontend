import { useContext } from "react";
import { AppContext } from "../AppContext";
import "../styles/pages/PageWelcome.scss";
import { subtitle } from "../interfaces";

export const PageWelcome = () => {
  const { currentSubtitle } = useContext(AppContext);
  return (
    <div className="pageWelcome">
      <p>Start Shopping {subtitle[currentSubtitle]}</p>
    </div>
  );
};
