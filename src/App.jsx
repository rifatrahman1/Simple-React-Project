
import { useState } from 'react'
import All_Product from './Components/All_Product/All_Product'
import Cart_Container from './Components/Cart_Container/Cart_Container'
import Header from './Components/Header/Header'

function App() {

  const [is_active, set_is_active] = useState({
    cart: true,
    status: 'cart'
  });

  const [select_product, set_select_product] = useState([]);

  const handle_select_product = (product) => {

    const is_exit = select_product.find((p) => p.id === product.id);

    if (!is_exit) {
      const new_product = [...select_product, product];
      set_select_product(new_product);
    }
    else {
      alert('This Product is Already Added...!')
    }


  }

  const handle_is_active = (status) => {
    if (status === 'cart') {
      set_is_active({
        cart: true,
        status: 'cart'
      })
    }
    else {
      set_is_active({
        cart: false,
        status: 'about'
      })
    }
  }

  return (
    <div>
      <Header select_product={select_product}></Header>
      <div className='w-8/12 mx-auto grid grid-cols-2 gap-6 mt-12'>
        <All_Product handle_select_product={handle_select_product}></All_Product>
        <Cart_Container select_product={select_product} is_active={is_active} handle_is_active={handle_is_active}></Cart_Container>
      </div>
    </div>
  )
}

export default App
