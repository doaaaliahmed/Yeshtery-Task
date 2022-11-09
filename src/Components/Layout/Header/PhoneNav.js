import '../../../sass/main.scss';
import ListBtn from '../../../images/bars-solid';
import logo from '../../../images/logo.svg';
import CartIcon from '../../../images/icons/CartIcon';
import WishListIcon from '../../../images/icons/WishListIcon';
import SearchIcon from '../../../images/SearchIcon';
import CloseIcon from '../../../images/icons/CloseIcon';
import {useState} from 'react';
import AsideBar from './AsideBar';

const PhoneNav = ()=>{
    const list = [
        {id:'icon1', icon:<SearchIcon/>},
        {id:'icon2', icon:<CartIcon/>},
        {id:'icon3', icon:<WishListIcon/>},
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
        <nav className='navbar'>
          <div className='col-1 brand'>
               <button className="list-btn" onClick={navButtonHandler}>{navButton.value}</button>
                {!navButton.isOpen && <AsideBar onChangeButton={navButtonHandler}/>}
                
                
              <img src={logo} alt='logo' className='brand-img'/>
            </div>
            <ul className='col-3 listCotainer'>
                {list.map(l=> 
                   <li key={l.id} className='list-item'><a href='contact.com' className='nav-link'><span>{l.icon}</span></a></li>
                )}
             
            </ul>
        </nav>
        
    )
}

export default PhoneNav;