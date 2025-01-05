// ArrowRightFillOutline
import React from "react";

const ArrowRightFillOutline = ({ size = 24, color = "currentColor" }) => (
  <svg
    class="w-6 h-6 text-gray-800 dark:text-white"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill={color}
    viewBox="0 0 24 24"
  >
    <path
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M16.153 19 21 12l-4.847-7H3l4.848 7L3 19h13.153Z"
    />
  </svg>
);

export default ArrowRightFillOutline;
