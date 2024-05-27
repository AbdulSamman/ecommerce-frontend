import { createContext, useEffect, useState } from "react";
import { IAppContext, IAppProvider, subtitle } from "./interfaces";

export const AppContext = createContext<IAppContext>({} as IAppContext);

export const AppProvider: React.FC<IAppProvider> = ({ children }) => {
  const [currentSubtitle, setCurrentSubtitle] = useState(0);

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
      }}>
      {children}
    </AppContext.Provider>
  );
};
