import React from "react";

const StopOutline = ({ size = 24, color = "currentColor" }) => (
  <svg
    className="w-6 h-6 text-gray-800 dark:text-white"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 24 24"
  >
    <rect
      width="12"
      height="12"
      x="6"
      y="6"
      stroke="currentColor"
      stroke-linejoin="round"
      stroke-width="2"
      rx="1"
    />
  </svg>
);

export default StopOutline;
