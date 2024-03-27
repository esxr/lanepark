import React from 'react';

const Checkbox = ({
  checked,
  size = '24px', // Keeping the size customizable
  color = '#000000', // Default color, can be customized to fit the theme
  className,
  onClick,
  ...rest
}) => {
  return (
    <svg
      width={size} // Width is based on the size prop
      height={size} // Height matches the width for a square aspect ratio
      viewBox="0 0 24 24"
      fill="none" // Removed the default fill for a more minimal appearance
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      tabIndex="0"
      style={{ cursor: 'pointer', display: 'inline-block' }} // Added cursor style for better UX
      onClick={onClick}
      onKeyDown={e => {
        // Enables keyboard interaction for accessibility
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault(); // Prevents the page from scrolling on spacebar press
          onClick();
        }
      }}
      {...rest}
    >
      {checked ? (
        // Adjusted the checkmark for a sleeker look
        <path
          d="M5 12L9 16L19 6"
          stroke={color} // Using stroke instead of fill for a minimalist outline style
          strokeWidth="2"
          strokeLinecap="round" // Adds rounded ends to the line for a softer appearance
          strokeLinejoin="round" // Rounds the corners where the line segments join
        />
      ) : (
        // Outer box remains the same but is now only outlined, not filled
        <rect
          x="2.5"
          y="2.5"
          width="19"
          height="19"
          rx="4" // Added a slight rounding to the corners for a modern touch
          stroke={color}
          strokeWidth="2" // Outline thickness
        />
      )}
    </svg>
  );
};

export default Checkbox;
