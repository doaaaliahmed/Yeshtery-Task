import '../../../sass/main.scss';
import logo from '../../../images/logo.svg';
import ListBtn from '../../../images/bars-solid';
import ContactIcon from '../../../images/icons/ContactIcon';
import CartIcon from '../../../images/icons/CartIcon';
import LocateIcon from '../../../images/icons/LocateIcon';
import { useState } from 'react';
import CloseIcon from '../../../images/icons/CloseIcon';
import AsideBar from './AsideBar';


const FirstNav = ()=>{

    const navList = [
        {key : 'navList1', title : 'Contact Us' , icon :<ContactIcon/>},
        {key : 'navList2', title : 'Track Order' , icon :<CartIcon/>},
        {key : 'navList3', title : 'Find A Store' , icon :<LocateIcon/>},
    ]

    const [navButton, setNavButton] = useState({
        value: <ListBtn/>,
        isOpen: true
    });

    const navButtonHandler = ()=>{
        navButton.isOpen ? 
        setNavButton({
            value : <CloseIcon/>,
            isOpen:false
        }) : 
        setNavButton({
            value : <ListBtn/>,
            isOpen:true
        }) 

    }

    return (
        <nav className='firstNav'>
            <div className='firstNav_col-1 brand'>
                <button className="list-btn" onClick={navButtonHandler}>{navButton.value}</button>
                {!navButton.isOpen && <AsideBar onChangeButton={navButtonHandler}/>}
              <img src={logo} alt='logo' className='brand-img'/>
            </div>
            <div className='firstNav_col-2'>
                <p>Valantines Day Offers! Buy Two Get One Free <a href="shop" className='shop-link'>Shop Now</a></p>
            </div>
            <ul className='firstNav_col-3 listCotainer'>
                {navList.map(l=> 
                     <li key={l.id} className='list-item'><a href='contact.com' className='nav-link'><span>{l.icon}</span><span>{l.title}</span></a></li>
                     )}
               
            </ul>

        </nav>
    )


}

export default FirstNav;