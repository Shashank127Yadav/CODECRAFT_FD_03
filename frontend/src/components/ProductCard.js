import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import axios from "axios";

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);
  const [review, setReview] = useState({ user: "", rating: 0, comment: "" });

  const submitReview = async () => {
    try {
      await axios.post(
        `http://localhost:2000/api/products/${product._id}/review`,
        review
      );
      alert("Review submitted!");
    } catch (err) {
      console.error("Review error:", err);
    }
  };

  return (
    <div className="border p-4 rounded shadow-md">
      <img
        src={product.image}
        alt={product.name}
        className="h-40 w-full object-cover rounded mb-2"
      />
      <h2 className="font-bold text-lg">{product.name}</h2>
      <p>{product.description}</p>
      <p className="text-green-600 font-semibold">₹ {product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="mt-2 bg-blue-600 text-white px-3 py-1 rounded"
      >
        Add to Cart
      </button>

      {/* Review Form */}
      <div className="mt-4">
        <input
          placeholder="Your Name"
          className="border px-2 py-1 mb-1 w-full"
          onChange={(e) => setReview({ ...review, user: e.target.value })}
        />
        <input
          type="number"
          placeholder="Rating (1-5)"
          className="border px-2 py-1 mb-1 w-full"
          onChange={(e) => setReview({ ...review, rating: e.target.value })}
        />
        <textarea
          placeholder="Your comment"
          className="border px-2 py-1 w-full"
          onChange={(e) => setReview({ ...review, comment: e.target.value })}
        />
        <button
          onClick={submitReview}
          className="mt-1 bg-green-600 text-white px-3 py-1 rounded"
        >
          Submit Review
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
