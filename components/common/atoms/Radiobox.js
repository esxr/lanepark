import React from 'react';

const LaneparkRadiobox = ({
  checked,
  size = '24px',
  color = '#000000', // Consider using a brand-specific color
  className,
  onClick,
  ...rest
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`lanepark-radiobox ${className}`}
      tabIndex="0"
      style={{ cursor: 'pointer', display: 'inline-block', height: size, width: size }}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault(); // Prevent the page from scrolling down when space is pressed
          onClick();
        }
      }}
      {...rest}
    >
      <circle
        cx="12"
        cy="12"
        r="9"
        stroke={color}
        strokeWidth="2"
      />
      {checked && (
        <circle
          cx="12"
          cy="12"
          r="5"
          fill={color}
        />
      )}
    </svg>
  );
};

export default LaneparkRadiobox;

LaneparkRadiobox.defaultProps = {
  onClick: () => {}
};
