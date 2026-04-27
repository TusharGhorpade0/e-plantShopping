// src/components/ProductList.jsx

import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/CartSlice";

function ProductList({ setShowCart }) {
  const dispatch = useDispatch();

  const plantsArray = {
    Indoor: [
      { id: 1, name: "Snake Plant", price: 15, image: "https://via.placeholder.com/150" },
      { id: 2, name: "Money Plant", price: 20, image: "https://via.placeholder.com/150" }
    ],

    Medicinal: [
      { id: 3, name: "Aloe Vera", price: 12, image: "https://via.placeholder.com/150" },
      { id: 4, name: "Tulsi", price: 10, image: "https://via.placeholder.com/150" }
    ],

    Flowering: [
      { id: 5, name: "Rose", price: 18, image: "https://via.placeholder.com/150" },
      { id: 6, name: "Sunflower", price: 16, image: "https://via.placeholder.com/150" }
    ]
  };

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  return (
    <div>
      <h1>Product List</h1>

      <button onClick={() => setShowCart(true)}>Go to Cart</button>

      {Object.keys(plantsArray).map((category) => (
        <div key={category}>
          <h2>{category}</h2>

          <div className="card-container">
            {plantsArray[category].map((plant) => (
              <div className="card" key={plant.id}>
                <img src={plant.image} alt={plant.name} />
                <h3>{plant.name}</h3>
                <p>${plant.price}</p>

                <button onClick={() => handleAddToCart(plant)}>
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;