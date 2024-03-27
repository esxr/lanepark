import React from 'react';

import Lottie from 'react-lottie';
// Update the import path to your new animation file that fits the Lanepark theme
import animationData from '../../lotties/lanepark-add-to-cart.json'; 

export default function LaneparkCartAnimation( props ) {
  const defaultOptions = {
    loop: false,
    autoplay: false, // Consider setting this to true if you want the animation to play automatically when visible
    animationData: animationData, // Your new animation data
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className="lanepark-cart-animation"> // Updated class name for styling according to Lanepark's theme
      <Lottie
        options={defaultOptions}
        height={40} // Adjusted size for better visibility according to Lanepark's design principles
        width={40} // Adjusted size for better visibility
        isStopped={!props.isStopped}
      />
    </div>
  );
}
