import React from "react";

export default function Item({ svg, text }) {
  return (
    <div>
      <span className="p2">
        {svg}
        <span className="p-2">{text}</span>
      </span>
    </div>
  );
}
