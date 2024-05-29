import { LandingPage } from "../components/LandingPage";
import { LandingPage2 } from "../components/LandingPage2";

export const PageWelcome = () => {
  return (
    <>
      <div className="pageWelcome">
        <LandingPage />
        <LandingPage2 />
      </div>
    </>
  );
};
