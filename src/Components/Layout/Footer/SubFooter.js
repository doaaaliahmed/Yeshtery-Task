import nasavLogo from '../../../images/nas_nav-logo.svg';
import "../../../sass/main.scss";
import cash from '../../../images/payment-images/cash.png';
import visa from '../../../images/payment-images/visa.png';
import mastercard from '../../../images/payment-images/matercard.png';
const Footer = ()=>{

    return (
            <div className='row row-2'>
                <p className="col-1">© 2022 yeshtery, all rights reserved.</p>
                <ul className='col-2'>
                    <li className='list-item'><a href='credits.com' className='link-item'>
                        <img src={cash} alt='cash'/>
                        </a></li>
                        <li className='list-item'><a href='credits.com' className='link-item'>
                        <img src={visa} alt='cash'/>
                        </a></li>
                        <li className='list-item'><a href='credits.com' className='link-item'>
                        <img src={mastercard} alt='cash'/>
                        </a></li>
                </ul>
                <div className="col-3">Powered By<span><img src={nasavLogo} alt=''/></span></div>
            </div>

    )

}

export default Footer;