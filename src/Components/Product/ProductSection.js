import '../../sass/main.scss';
import Tshirt from "../../images/adidas-1/adidas-T-shirt.jpg";
import slide1 from "../../images/adidas-1/T-shirt-1.jpg";
import slide2 from "../../images/adidas-1/T-shirt-2.jpg";
import slide3 from "../../images/adidas-1/T-shirt-3.jpg";
import adidas from "../../images/adidas.jpg";
import StarIcon from "../../images/icons/StarIcon";
import {useState , useRef} from 'react';
const ProductSection = (props) => {

    const description = useRef();
    const price = useRef();
    const quantity = useRef();

    const [chosenImg , setChosenImg] = useState(Tshirt);

    const [quantityNum , setQuantityNum] = useState(1);

    const [size,setSize] = useState();

    const decreaseNumberFunc = ()=>{
        if(quantityNum <= 1) return;
       
      return  setQuantityNum(quantityNum -1)
    }

    const increaseNumberFunc = ()=>{
        if(quantityNum >= 10) return;
        return  setQuantityNum(quantityNum + 1)
      }

    const changeImgFuc = (e)=>{
        setChosenImg(e.target.src );
       
    }

    const sizeHandlerFunc = (e)=>{
        setSize(e.target.value)
    }

     const productSubmitFunc = (e)=>{
        e.preventDefault();

        const product = {
            'description' : description.current.textContent,
            'price': price.current.textContent,
            'quantity': quantity.current.textContent,
            'size': size,
            'choseImg' : chosenImg
        }

         fetch('https://yeshtery-58303-default-rtdb.firebaseio.com/product.json', {
            method:'POST',
            body : JSON.stringify(product)
        })

    }
  return (
    <section className="productSection">
        <form onSubmit={productSubmitFunc}>
      <div className="product-images">
        <div className="main-img">
          <img src={chosenImg} alt="main-img" />
        </div>
        <div className="imges-box">
          <div className="imges-box__container">
            <img src={Tshirt} alt="main-img"  onClick={changeImgFuc} />
            <img src={slide1} alt={'slide1'}  onClick={changeImgFuc} />
            <img src={slide2} alt={'slide2'}  onClick={changeImgFuc} />
            <img src={slide3} alt={'slide3'}  onClick={changeImgFuc} />
          </div>
        </div>
      </div>
      <div className="product-details">
        
          <div className="brand-img">
            <img src={adidas} alt="" />
          </div>
          <h3 className="product-details__title" ref={description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit{" "}
          </h3>
          <div className="product-details__price">
            <p className="after" ref={price}>9.999 LE</p>
            <p>
              {" "}
              <span className="before">9.999 LE </span>{" "}
              <span className="offers">50%</span>
            </p>
          </div>

          <div className="rate-box">
            <div className="stars">
              <StarIcon className="checked star" />
              <StarIcon className="checked star" />
              <StarIcon className="checked star" />
              <StarIcon className="star" />
              <StarIcon className="star" />
            </div>

            <div style={{ color: "gray" }}>4.2 of 5</div>
            <div>22 rates</div>
          </div>

          <hr></hr>
          <div className="sizeBox">
            <h3>Size</h3>
            <div className="sizeBox__options">
              <div className="option">
                <input type='radio'  value='small' id='small' name='size' onChange={sizeHandlerFunc}/>
                <label htmlFor='small'>small</label>
              </div>
              <div className="option">
              <input type='radio'  value='medium' id='medium' name='size' onChange={sizeHandlerFunc}/>
                <label htmlFor='medium'>medium</label>
              </div>
              <div className="option">
                 <input type='radio'  value='large' id='large' name='size' onChange={sizeHandlerFunc}/>
                <label htmlFor='large'>large</label>
              </div>
              <div className="option">
              <input type='radio'  value='x-large' id='x-large' name='size' onChange={sizeHandlerFunc}/>
                <label htmlFor='x-large'>x large</label>
              </div>
              <div className="option">
              <input type='radio'  value='xx-large' id='xx-large' name='size' onChange={sizeHandlerFunc}/>
                <label htmlFor='xx-large'>xx large</label>
              </div>
            </div>
          </div>
          <hr></hr>
          <div className="colorBox">
            <h3>Color</h3>
            <div className="colorBox__options">
              <div className="option">
                <img src={slide1} alt="" />
              </div>
            </div>
          </div>

          <hr></hr>

          <div className="quantityBox">
            <h3>Quatity</h3>
            <div className="quantityBox__numbers">
              <span className="dicreaseNum" onClick={decreaseNumberFunc}>-</span>
              <span className="num" ref={quantity}>{quantityNum}</span>
              <span className="increaseNum"  onClick={increaseNumberFunc}>+</span>
            </div>
            <div className="order-Buttons">
              <button type='submit' className="order-btn">Add To Cart</button>
              <button className="store-btn">Pickup From Store</button>
            </div>
          </div>
       
      </div>
      </form>
    </section>
  );
};

export default ProductSection;
