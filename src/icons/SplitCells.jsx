import React from "react";

const SplitCells = ({ size = 24, color = "currentColor" }) => (
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
      d="M4 18v2h6V4H4v2m16 12v2h-6V4h6v2M6.49545 14.4954 4.00003 12m0 0 2.49542-2.49543M4.00003 12h5.94809m7.49798 2.5539L20 12m0 0-2.5539-2.55392M20 12h-5.8319"
    />
  </svg>
);

export default SplitCells;
