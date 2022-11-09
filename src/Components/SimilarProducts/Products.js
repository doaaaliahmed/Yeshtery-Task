import ProductCard from "./ProductCard";
import '../../sass/main.scss';
import img1 from '../../images/woman-close/woman-close.jpg';
import img2 from '../../images/adidas-1/adidas-T-shirt.jpg';
import img3 from '../../images/adidas-woman/adidas-shirt-woman.jpg';
import img4 from '../../images/woman-close/woman-close.jpg';

const Products = ()=>{

    const productList = [
        {id:'k1', img: img1},
        {id:'k2', img: img2},
        {id:'k3', img: img3},
        {id:'k4', img: img4},
    ]

    return (
        <section className="product-section">
            <div className='heading-section'>
                <h2 className="heading-section_title">Similar Products</h2>
                <p className="heading-section_text">You may like these products also</p>
            </div>
        <div className="card-container">
        <div className="cards">
            {productList.map(list =>    <ProductCard key={list.id} img={list.img} loading='lazy'/>)} 
            {productList.map(list =>    <ProductCard key={list.id} img={list.img} loading='lazy'/>)}          
        </div>
        </div>
        </section>
    )
}

export default Products;