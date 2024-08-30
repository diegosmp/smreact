import { useEffect, useRef, useState } from "react";
import { products } from "../../db/products";

function Products() {
  const [cart, setCart] = useState(() => {
    const getProductLocalStorage = localStorage.getItem("my-cart");
    return getProductLocalStorage ? JSON.parse(getProductLocalStorage) : [];
  });
  const carouselRef = useRef(null);

  useEffect(() => {
    localStorage.setItem("my-cart", JSON.stringify(cart));
  }, [cart]);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const handleClickAddCart = (product) => {
    const { name, price, imgUrl, id } = product;
    const newProductAddCart = {
      id,
      name,
      price,
      imgUrl,
      quantity: 1,
    };

    if (newProductAddCart.name === name) {
      cart.filter((product) => (product.quantity += 1));
    }

    setCart([...cart, newProductAddCart]);
  };

  return (
    <div className="carousel-container">
      <button onClick={scrollLeft} className="carousel-button left">
        {"<"}
      </button>
      <section className="store-products" ref={carouselRef}>
        {products.map((product) => {
          return (
            <div key={product.id} className="card-product">
              <img src={product.imgUrl} alt={product.name} />
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <h3>R$ {(product.price * 5.5).toFixed(2).replace(".", ",")}</h3>
              <button onClick={() => handleClickAddCart(product)}>
                +Add to cart
              </button>
            </div>
          );
        })}
      </section>
      <button onClick={scrollRight} className="carousel-button right">
        {">"}
      </button>
    </div>
  );
}

export default Products;
