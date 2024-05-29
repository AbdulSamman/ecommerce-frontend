import { createContext, useEffect, useState } from "react";
import {
  HandleScroll,
  IAppContext,
  IAppProvider,
  subtitle,
} from "./interfaces";

export const AppContext = createContext<IAppContext>({} as IAppContext);

export const AppProvider: React.FC<IAppProvider> = ({ children }) => {
  const [currentSubtitle, setCurrentSubtitle] = useState(0);

  const [rotateBox, setRotateBox] = useState(40);
  const [positionImg, setPositionImg] = useState(20);
  const handleScroll: HandleScroll = (_, scrollY) => {
    switch (true) {
      case scrollY >= 90:
        setRotateBox(0);
        setPositionImg(25);
        break;
      case scrollY >= 80:
        setRotateBox(5);
        break;
      case scrollY >= 70:
        setRotateBox(10);

        break;

      case scrollY >= 60:
        setRotateBox(15);
        break;
      case scrollY >= 50:
        setRotateBox(20);
        break;
      case scrollY >= 40:
        setRotateBox(25);
        break;
      case scrollY >= 30:
        setRotateBox(30);
        break;
      case scrollY >= 20:
        setRotateBox(35);
        break;
      default:
        setRotateBox(40);
        setPositionImg(0);
        break;
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", (event) =>
      handleScroll(event, window.pageYOffset)
    );
    return () => {
      window.removeEventListener("scroll", (event) =>
        handleScroll(event, window.pageYOffset)
      );
    };
  });

  // change subtitle
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSubtitle((i) => {
        if (i === subtitle.length - 1) {
          clearInterval(intervalId);
          return i;
        }
        return i + 1;
      });
    }, 2000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <AppContext.Provider
      value={{
        currentSubtitle,
        rotateBox,
        positionImg,
      }}>
      {children}
    </AppContext.Provider>
  );
};
