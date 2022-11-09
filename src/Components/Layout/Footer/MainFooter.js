import "../../../sass/main.scss";
import logo from "../../../images/yellow-logo.svg";
import facebook from '../../../images/contact-icons/facebook.png';
import instagram from '../../../images/contact-icons/instagram.png';
import linkedin from '../../../images/contact-icons/linkedin.png';
const MainFooter = ()=>{
    return (
        <div className="row row-1">
        <div className="col-1">
          <div className="brand-name">
            <img src={logo} alt="logo" />
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
            </p>
            <p>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
            </p>
        </div>

        <div className="col-2">
            <div className='email-container'>
                <h2>Subscribe to our newsletter</h2>
            <form>
              <input type='email' id='email' name='email' placeholder="Enter your email"/>
              <button type='submit' id='submit-btn'>Subscribe</button>
            </form>
            </div>
            <div className='links'>
                <div className='links-1'>
                <ul>
                <li className="list-item"><a href="men.com" className='link-item'>About Us</a></li>
                <li className="list-item"><a href="men.com" className='link-item'>Contact Us</a></li>
                <li className="list-item"><a href="men.com" className='link-item'>Track Order</a></li>
                <li className="list-item"><a href="men.com" className='link-item'>Terms & Conditions</a></li>
                <li className="list-item"><a href="men.com" className='link-item'>Privacy Policy</a></li>
                <li className="list-item"><a href="men.com" className='link-item'>Sell With Us</a></li>
                <li className="list-item"><a href="men.com" className='link-item'>Shipping And Returns</a></li>

            </ul>
                </div>
                <div className='links-2'>
                <ul>
                <li className="list-item"><a href="men.com" className='link-item'><span><img src={facebook} alt=""/></span>/Facebook</a></li>
                <li className="list-item"><a href="men.com" className='link-item'><span><img src={instagram} alt=""/></span>/Instagram</a></li>
                <li className="list-item"><a href="men.com" className='link-item'><span><img src={linkedin} alt=""/></span>/LInkedIn</a></li>
          
            </ul>
                </div>
            </div>
        </div>
      </div>
    )
}

export default MainFooter;