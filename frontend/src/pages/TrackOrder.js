import React, { useState } from "react";
import axios from "axios";

function TrackOrder() {
  const [orderId, setOrderId] = useState("");
  const [order, setOrder] = useState(null);

  const fetchOrder = async () => {
    try {
      const res = await axios.get(
        `http://localhost:2000/api/orders/${orderId}`
      );
      setOrder(res.data);
    } catch (err) {
      console.error("Fetch order failed:", err);
    }
  };

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Track Order</h1>
      <input
        placeholder="Enter Order ID"
        value={orderId}
        onChange={(e) => setOrderId(e.target.value)}
        className="border p-2 mb-2 w-full"
      />
      <button
        onClick={fetchOrder}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Track
      </button>

      {order && (
        <div className="mt-4">
          <h2 className="font-semibold">Customer: {order.customerName}</h2>
          <p>Status: {order.status}</p>
          <ul>
            {order.items.map((i, idx) => (
              <li key={idx}>
                {i.productId.name} x {i.quantity}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default TrackOrder;
