import React from "react";

const GoToPrev = ({ size = 24, color = "currentColor" }) => (
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
      d="M3 15v3c0 .5523.44772 1 1 1h9.5M3 15v-4m0 4h9m-9-4V6c0-.55228.44772-1 1-1h16c.5523 0 1 .44772 1 1v5H3Zm5 0v8m4-8v8m5.9001-1.0999L16 16m0 0 1.9001-1.9001M16 16h5"
    />
  </svg>
);

export default GoToPrev;
