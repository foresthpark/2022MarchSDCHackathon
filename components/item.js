import React from "react";

export default function Item({ text }) {
  return (
    <div>
      <span className="p-2">{text}</span>
    </div>
  );
}
