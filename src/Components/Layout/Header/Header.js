import FirstNav from "./FirstNav";
import PhoneNav from "./PhoneNav";
import SecondNav from "./SecondNav";
import ThirdNav from "./ThirdNav";
import { useState, useEffect, Fragment } from "react";

const Header = () => {


  const [matches, setMatches] = useState(
    window.matchMedia("(max-width: 1200px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(max-width: 1200px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);

  return (
    <header>
      {matches && <PhoneNav />}
      {!matches && (
        <Fragment>
          <FirstNav />
          <SecondNav />
          <ThirdNav />
        </Fragment>
      )}
    </header>
  );
};

export default Header;
