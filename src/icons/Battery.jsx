import React from "react";

const Battery = ({ size = 24, color = "currentColor" }) => (
  <svg
    class="w-6 h-6 text-gray-800 dark:text-white"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill={color}
    viewBox="0 0 25 25"
  >
    <path d="M7 13v-2h7v2H7Z" />
    <path
      fill-rule="evenodd"
      d="M2 8a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8Zm4 1a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H6Z"
      clip-rule="evenodd"
    />
    <path d="M22 14v-4a1 1 0 0 0-1-1h-1v6h1a1 1 0 0 0 1-1Z" />
  </svg>
);

export default Battery;
