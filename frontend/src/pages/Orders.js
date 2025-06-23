import React, { useEffect, useState } from "react";
import axios from "axios";

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:2000/api/orders")
      .then((res) => setOrders(res.data))
      .catch((err) => console.error("Fetch orders error:", err));
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">
        📦 Order Management
      </h1>
      {orders.length === 0 ? (
        <p className="text-center text-gray-600">No orders found.</p>
      ) : (
        <div className="space-y-6">
          {orders.map((order) => (
            <div
              key={order._id}
              className="border border-gray-200 rounded-lg p-6 shadow-md bg-white"
            >
              <div className="mb-2">
                <span className="font-semibold">Order ID:</span>{" "}
                <span className="text-sm text-gray-700">{order._id}</span>
              </div>
              <div className="mb-2">
                <span className="font-semibold">Customer:</span>{" "}
                {order.customerName}
              </div>
              <div className="mb-4">
                <span className="font-semibold">Status:</span>{" "}
                <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">
                  {order.status}
                </span>
              </div>
              <div>
                <p className="font-semibold mb-2">🛍️ Items:</p>
                <ul className="space-y-2">
                  {order.items.map((item) => (
                    <li
                      key={item._id}
                      className="flex justify-between text-sm border-b pb-1"
                    >
                      <span>{item.productId?.name}</span>
                      <span>
                        ₹{item.productId?.price} × {item.quantity}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Orders;
