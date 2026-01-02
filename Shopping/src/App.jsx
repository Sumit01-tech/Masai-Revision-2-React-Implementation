import { useState } from "react";

export default function ShoppingCart() {
  const UNIT_PRICE = 29.99;
  const [quantity, setQuantity] = useState(1);

  const hasDiscount = quantity >= 5;
  const subtotal = quantity * UNIT_PRICE;
  const discount = hasDiscount ? subtotal * 0.1 : 0;
  const total = subtotal - discount;

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "40px auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#fafafa"
      }}
    >
      <h2 style={{ marginBottom: "20px" }}>Product Card</h2>

      {/* Quantity Controls */}
      <div style={{ marginBottom: "15px" }}>
        <button
          style={{
            padding: "6px 12px",
            fontSize: "18px",
            cursor: "pointer"
          }}
          onClick={() => setQuantity(q => Math.max(1, q - 1))}
        >
          −
        </button>

        <span
          style={{
            margin: "0 15px",
            fontSize: "18px",
            fontWeight: "bold"
          }}
        >
          {quantity}
        </span>

        <button
          style={{
            padding: "6px 12px",
            fontSize: "18px",
            cursor: "pointer"
          }}
          onClick={() => setQuantity(q => q + 1)}
        >
          +
        </button>
      </div>

      <p>Unit Price: <strong>${UNIT_PRICE.toFixed(2)}</strong></p>
      <p>Subtotal: <strong>${subtotal.toFixed(2)}</strong></p>

      {hasDiscount && (
        <p style={{ color: "green", fontWeight: "bold" }}>
          🎉 Bulk Discount Applied (10%)
        </p>
      )}

      <h3 style={{ marginTop: "15px" }}>
        Total: ${total.toFixed(2)}
      </h3>
    </div>
  );
}
