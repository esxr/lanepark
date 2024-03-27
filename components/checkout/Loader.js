import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../lotties/checkout.json';

export default function LaneparkLoader() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className="lanepark-loader">
      <Lottie options={defaultOptions} height={400} width={300} />
      <h2 className="text-center">Processing your order...</h2>
    </div>
  );
}
