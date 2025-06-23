import React, { useState } from "react";
import axios from "axios";

function ContactSupport() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const submitSupport = async () => {
    try {
      await axios.post("http://localhost:2000/api/support", form);
      alert("Support message sent!");
    } catch (err) {
      console.error("Support error:", err);
    }
  };

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Contact Support</h1>
      <input
        placeholder="Your Name"
        className="border w-full p-2 mb-2"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input
        placeholder="Your Email"
        className="border w-full p-2 mb-2"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <textarea
        placeholder="Message"
        className="border w-full p-2 mb-2"
        onChange={(e) => setForm({ ...form, message: e.target.value })}
      ></textarea>
      <button
        onClick={submitSupport}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Send
      </button>
    </div>
  );
}

export default ContactSupport;
