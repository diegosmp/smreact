import { useState } from "react";
import Cart from "../Cart";
import "./header.css";

function Header() {
  const [modalCart, setModalCart] = useState(false);
  return (
    <>
      <header>
        <h1>DiApple</h1>
        <button onClick={() => setModalCart(true)} className="btn-cart">
          Cart
        </button>
      </header>
      <Cart modalCart={modalCart} fn={setModalCart} />
    </>
  );
}

export default Header;
