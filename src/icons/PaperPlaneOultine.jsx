import React from "react";

const PaperPlaneOultine = ({ size = 24, color = "currentColor" }) => (
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
      d="m12 18-7 3 7-18 7 18-7-3Zm0 0v-5"
    />
  </svg>
);

export default PaperPlaneOultine;
