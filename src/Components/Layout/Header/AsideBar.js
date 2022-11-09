import { Fragment } from "react";
import CloseIcon from "../../../images/icons/CloseIcon";
import logo from '../../../images/logo.svg';
import '../../../sass/main.scss';
import ReactDOM from 'react-dom';

const AsideBar = (props)=>{

    const Overlay = props =>{
        return <div className="overlay" onClick={props.onClick}></div>
    }

    const NavbarModel = props=>{
        return <aside>
        <div className="heading-bar">
            <img src={logo} alt='brand'/>
            <button className="close-btn" onClick={props.onClick}><CloseIcon /></button>
        </div>
        <ul>
        <li className="list-item"><a href="men.com" className='link-item'>Men</a></li>
                <li className="list-item"><a href="men.com" className='link-item'>Women</a></li>
                <li className="list-item"><a href="men.com" className='link-item'>Kids</a></li>
                <li className="list-item"><a href="men.com" className='link-item'>Sports & Fitness</a></li>
                <li className="list-item"><a href="men.com" className='link-item'>Electronics</a></li>
              
        </ul>
    </aside>

    }

    return <Fragment>
        {ReactDOM.createPortal(<Overlay onClick={props.onChangeButton}/>,document.getElementById('overlay'))}
        {ReactDOM.createPortal(<NavbarModel onClick={props.onChangeButton} />,document.getElementById('navModel'))}
        
        <NavbarModel/>
    </Fragment>

 

}

export default AsideBar;