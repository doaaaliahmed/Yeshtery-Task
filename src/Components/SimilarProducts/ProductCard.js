import '../../sass/main.scss';
import adidas from '../../images/adidas.jpg';
import StarIcon from '../../images/icons/StarIcon';

const ProductCard = (props)=>{

    return <div className="card">
        <img src={props.img} alt="" className='card-img'/>
        <div className='card-body'>
            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit </h3>
            <div className='details'>
                <div className='price'>
                <p className='price-after'>9.999 LE</p>
                <p> <span className='price-before'>9.999 LE </span> <span className='offers'>50%</span></p>
                </div>
                <div className='brand-img'><img src={adidas} alt=""/></div>
            </div>
            <div className='rate-box'>
                <div className='stars'>
                <StarIcon className='checked star'/>
                <StarIcon className='checked star'/>
                <StarIcon className='checked star'/>
                <StarIcon className='star'/>
                <StarIcon className='star'/>
                </div>

                <div>4.2 of 5</div>
            </div>
            <p className='from'>Pickup From: <span style={{fontWeight:'bold'}}>Genna Mall</span></p>
        </div>

         </div>
}

export default ProductCard;