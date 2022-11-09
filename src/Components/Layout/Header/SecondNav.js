import '../../../sass/main.scss';
import SearchIcon from '../../../images/SearchIcon';
import adidas from '../../../images/adidas.jpg';
import CartIcon from '../../../images/icons/CartIcon';
import WishListIcon from '../../../images/icons/WishListIcon';
import UserIcon from '../../../images/icons/UserIcon';

const SecondNav = ()=>{
    const navList = [
        {key : 'navTwoList1', title : 'Cart' , icon :<CartIcon/>},
        {key : 'navTwoList2', title : 'Wishlist' , icon :<WishListIcon/>},
        {key : 'navTwoList2', title : 'Login' , icon :<UserIcon/>},
    ]

    return (
        <nav className='secondNav'>
            <div className='secondNav__col-1'>
                <form>
                    <SearchIcon />
                    <input type='search' placeholder='search' id='search' name='search'/>
                </form>
            </div>
            <div className='secondNav__col-2'>
                <img src={adidas} alt="adidas-brand"/>
            </div>
          
            <ul className='secondNav__col-3 listCotainer'>
                {navList.map(l=>
                  <li key ={l.id} className='list-item'><a href='contact.com' className='nav-link'><span>{l.icon}</span><span>{l.title}</span></a></li>
                    )}
            </ul>
           
        </nav>
    )
}

export default SecondNav;