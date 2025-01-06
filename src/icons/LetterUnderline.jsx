import React from "react";

const LetterUnderline = ({ size = 24, color = "currentColor" }) => (
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
      stroke-width="2"
      d="M6 19h12M8 5v9a4 4 0 0 0 8 0V5M6 5h4m4 0h4"
    />
  </svg>
);

export default LetterUnderline;
