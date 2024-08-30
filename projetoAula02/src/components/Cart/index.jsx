import PropTypes from "prop-types";
import "./cart.css";
import { useEffect, useState } from "react";

function Cart({ modalCart, fn }) {
  const [productsCart, setProductsCart] = useState(() => {
    const getItem = localStorage.getItem("my-cart");
    return getItem ? JSON.parse(getItem) : [];
  });

  const toglleModalCart = modalCart;

  useEffect(() => {
    const getItem = localStorage.getItem("my-cart");
    setProductsCart(JSON.parse(getItem));
  }, [toglleModalCart]);

  return (
    <div
      className="content-cart"
      style={{ display: toglleModalCart ? "flex" : "none" }}
    >
      <section className="container-cart">
        <h2>Meus produtos</h2>
        <div className="cart">
          <ul>
            {productsCart.length ? (
              productsCart.map((product) => {
                return (
                  <li key={product.id}>
                    <img src={product.imgUrl} alt={product.name} />
                    <h2>{product.name}</h2>
                    <div className="qtd-product">
                      <p>Qtde. {product.quantity}</p>
                      <span>|</span>
                      <strong>
                        R$ {(product.price * 5.5).toFixed(2).replace(".", ",")}
                      </strong>
                    </div>
                  </li>
                );
              })
            ) : (
              <h2>Nenhum item no seu carrinho</h2>
            )}
          </ul>
          <button onClick={() => fn(false)}>Fechar</button>
        </div>
      </section>
    </div>
  );
}

Cart.propTypes = {
  modalCart: PropTypes.bool,
  fn: PropTypes.func,
};

export default Cart;
