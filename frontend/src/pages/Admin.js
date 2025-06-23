import React, { useState } from "react";
import axios from "axios";

function AdminPanel() {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    image: "",
    stock: 0,
  });

  const [statusUpdate, setStatusUpdate] = useState({
    orderId: "",
    status: "Processing",
  });

  const addProduct = async () => {
    try {
      await axios.post("http://localhost:2000/api/products", product);
      alert("✅ Product added successfully!");
    } catch (err) {
      console.error("Add product error:", err);
      alert("❌ Failed to add product.");
    }
  };

  const updateOrderStatus = async () => {
    try {
      await axios.put(
        `http://localhost:2000/api/orders/${statusUpdate.orderId}/status`,
        { status: statusUpdate.status }
      );
      alert("✅ Order status updated!");
    } catch (err) {
      console.error("Status update error:", err);
      alert("❌ Failed to update order.");
    }
  };

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Admin Panel</h1>

      <div className="mb-6">
        <h2 className="font-semibold mb-2">Add New Product</h2>
        {["name", "description", "price", "category", "image", "stock"].map(
          (field, index) => (
            <input
              key={index}
              className="border p-2 mb-2 w-full"
              type={field === "price" || field === "stock" ? "number" : "text"}
              placeholder={field[0].toUpperCase() + field.slice(1)}
              onChange={(e) =>
                setProduct({ ...product, [field]: e.target.value })
              }
            />
          )
        )}
        <button
          onClick={addProduct}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add Product
        </button>
      </div>

      <div>
        <h2 className="font-semibold mb-2">Update Order Status</h2>
        <input
          className="border p-2 mb-2 w-full"
          placeholder="Order ID"
          onChange={(e) =>
            setStatusUpdate({ ...statusUpdate, orderId: e.target.value })
          }
        />
        <select
          className="border p-2 mb-2 w-full"
          onChange={(e) =>
            setStatusUpdate({ ...statusUpdate, status: e.target.value })
          }
        >
          <option value="Processing">Processing</option>
          <option value="Shipped">Shipped</option>
          <option value="Delivered">Delivered</option>
        </select>
        <button
          onClick={updateOrderStatus}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Update Status
        </button>
      </div>
    </div>
  );
}

export default AdminPanel;
