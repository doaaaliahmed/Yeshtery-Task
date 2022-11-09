import { Fragment ,useState } from 'react';
import './sass/main.scss';
import Footer from './Components/Layout/Footer/Footer';
import Header from './Components/Layout/Header/Header';
import ProductSection from './Components/Product/ProductSection';
import Products from './Components/SimilarProducts/Products';
import Cart from './Components/Cart';



function App() {

  const [clickCart, setClickCart] = useState(false);

const cartHandlerFunc = ()=>{
  !clickCart ?  setClickCart(true) : setClickCart(false);
}
  
  return (
    <Fragment>
    <Header/>
    {clickCart && <Cart onClickCart={cartHandlerFunc}/>}
    <main>
      <ProductSection/>
      <Products/>
    </main>
    <Footer/>
    </Fragment>
  );
}

export default App;
