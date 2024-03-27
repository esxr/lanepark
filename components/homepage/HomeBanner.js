import React from 'react';
import Link from 'next/link';

export default function HomeBanner() {
  return (
    <div className="p-5">
      <p
        className="font-size-display1 mt-5 text-center mx-auto text-uppercase"
        style={{ maxWidth: '53rem' }}
      >
        Discover the essence of modern minimalism with Lanepark. Where style meets sustainability.
      </p>
      <div className="d-flex align-items-center justify-content-center mt-3 mb-5">
        <Link href="/collections">
          <a className="d-flex py-3 align-items-center font-color-black borderbottom border-color-black">
            <p className="mr-3">Explore our collections</p>
            <img src="/icon/arrow-long-right.svg" alt="arrow icon" />
          </a>
        </Link>
      </div>
    </div>
  );
}
