import React from "react";

const IndentOutline = ({ size = 24, color = "currentColor" }) => (
  <svg
    className="w-6 h-6 text-gray-800 dark:text-white"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M6 6h12M6 18h12m-5-8h5m-5 4h5M6 9v6l3.5-3L6 9Z"
    />
  </svg>
);

export default IndentOutline;
