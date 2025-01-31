import React from "react";

const ArrowRepeatOne = ({ size = 24, color = "currentColor" }) => (
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
      d="m16 4 3 3H5v3m3 10-3-3h14v-3m-9-2.5 2-1.5v4"
    />
  </svg>
);

export default ArrowRepeatOne;
