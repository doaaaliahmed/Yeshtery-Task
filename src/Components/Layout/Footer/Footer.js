import "../../../sass/main.scss";
import SubFooter from "./SubFooter";
import MainFooter from "./MainFooter";


const Footer = () => {
  return (
    <footer className="footer">
      <MainFooter/>
      <SubFooter />
    </footer>
  );
};

export default Footer;
