import { useState } from "react";
import "../assets/style/style.css";

import white from "../assets/images/white.png";
import black from "../assets/images/black.png";
import blue from "../assets/images/blue.png";

import whiteThumb from "../assets/images/white-thumb.png";
import blackThumb from "../assets/images/black-thumb.png";
import blueThumb from "../assets/images/blue-thumb.png";

const products = [
  {
    id: 1,
    name: "CLOUDWALK ELITE",
    subtitle: "Lightweight comfort with everyday performance.",
    price: 20999,
    color: "Pristine White",
    image: white,
    thumb: whiteThumb,
    bg: "#ffffff",
  },
  {
    id: 2,
    name: "SHADOW STRIKE X",
    subtitle: "Bold street style with premium cushioning.",
    price: 18999,
    color: "Midnight Black",
    image: black,
    thumb: blackThumb,
    bg: "#f2f2f2",
  },
  {
    id: 3,
    name: "AEROFLOW PRO",
    subtitle: "Dynamic performance built for everyday movement.",
    price: 22999,
    color: "Electric Blue",
    image: blue,
    thumb: blueThumb,
    bg: "#eef4ff",
  },
];

const sizes = [6, 7, 8, 9, 10, 11, 12];

function Home() {
  const [selectedProduct, setSelectedProduct] = useState(0);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [showMessage, setShowMessage] = useState(false);

  const product = products[selectedProduct];

  // Change shoe product
  const changeProduct = (index) => {
    setSelectedProduct(index);
    setSelectedSize(null);
    setShowMessage(false);
  };

  // Select shoe size
  const selectSize = (size) => {
    setSelectedSize(size);
  };

  // Increase quantity
  const increaseQuantity = () => {
    setQuantity((oldQuantity) => oldQuantity + 1);
  };

  // Decrease quantity
  const decreaseQuantity = () => {
    setQuantity((oldQuantity) =>
      oldQuantity > 1 ? oldQuantity - 1 : 1
    );
  };

  // Add product to bag
  const addToBag = () => {
    if (!selectedSize) {
      alert("Please select your shoe size.");
      return;
    }

    setShowMessage(true);

    setTimeout(() => {
      setShowMessage(false);
    }, 2500);
  };

  // Dynamic total price
  const totalPrice = product.price * quantity;

  return (
    <div className="shoe-page">

      {/* Top Line */}
      <div className="top-line"></div>

      <main className="shoe-container">

        {/* ================= LEFT CONTENT ================= */}

        <section className="product-info">

          <div className="small-label">
            PREMIUM FOOTWEAR
          </div>

          <h1>{product.name}</h1>

          <p className="subtitle">
            {product.subtitle}
          </p>

          <div className="price">
            ₹{product.price.toLocaleString("en-IN")}
          </div>

          <div className="divider"></div>

          {/* COLOR */}

          <div className="option-title">
            <span>Color</span>
            <strong>{product.color}</strong>
          </div>

          <div className="color-indicator">
            <span
              className={`color-dot color-${selectedProduct}`}
            ></span>

            <span>{product.color}</span>
          </div>

          {/* SIZE */}

          <div className="size-heading">
            <span>Size</span>
            <span className="select-text">Select</span>
          </div>

          <div className="sizes">
            {sizes.map((size) => (
              <button
                key={size}
                className={
                  selectedSize === size
                    ? "size-button active"
                    : "size-button"
                }
                onClick={() => selectSize(size)}
              >
                {size}
              </button>
            ))}
          </div>

          {/* QUANTITY */}

          <div className="quantity-row">

            <span>Quantity</span>

            <div className="quantity-box">

              <button onClick={decreaseQuantity}>
                −
              </button>

              <span>{quantity}</span>

              <button onClick={increaseQuantity}>
                +
              </button>

            </div>

          </div>

          {/* ADD TO BAG */}

          <button
            className="add-button"
            onClick={addToBag}
          >
            ADD TO BAG
          </button>

          {showMessage && (
            <div className="success-message">
              ✓ Added to bag — Size {selectedSize}
            </div>
          )}

          {/* TOTAL */}

          <div className="total">
            Total: ₹{totalPrice.toLocaleString("en-IN")}
          </div>

        </section>


        {/* ================= RIGHT PRODUCT IMAGE ================= */}

        <section
          className="product-visual"
          style={{ background: product.bg }}
        >

          <div className="image-number">
            0{selectedProduct + 1}
          </div>

          <img
            key={product.id}
            src={product.image}
            alt={product.name}
            className="main-shoe"
          />

          <div className="image-controls">

            <button
              className="image-control active-control"
              onClick={() => changeProduct(selectedProduct)}
            >
              <img src={product.image} alt="" />
            </button>

            <button className="image-control">
              ↔
            </button>

            <button className="image-control">
              ⛶
            </button>

          </div>

        </section>

      </main>


      {/* ================= BOTTOM PRODUCTS ================= */}

      <section className="available-section">

        <div className="available-title">
          ALSO AVAILABLE
        </div>

        <div className="product-list">

          {products.map((item, index) => (

            <button
              key={item.id}
              className={
                selectedProduct === index
                  ? "mini-product selected"
                  : "mini-product"
              }
              onClick={() => changeProduct(index)}
            >

              <div className="mini-image">
                <img
                  src={item.thumb}
                  alt={item.name}
                />
              </div>

              <div className="mini-info">
                <span>{item.name}</span>
                <small>{item.color}</small>
              </div>

            </button>

          ))}

        </div>

      </section>


 {/* BOTTOM BAR */}

      <div className="bottom-bar">
        <span>MOVE DIFFERENT</span>

        <span>
          {selectedProduct + 1} / {products.length}
        </span>
      </div>

    </div>
     
  );
}

export default Home;