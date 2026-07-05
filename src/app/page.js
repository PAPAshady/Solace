'use client';
import { useRef } from 'react';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Home() {
  const containerRef = useRef(null);
  const img1 = useRef(null);
  const img2 = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom -500px',
        scrub: true,
        pin: true,
        markers: false,
      },
    });

    tl.to(img1.current, { opacity: 0, duration: 1 });
  });

  return (
    <>
      <div className="relative">
        <div className="flex h-dvh w-full items-end justify-center" ref={containerRef}>
          <div
            ref={img1}
            className="absolute z-1 h-dvh w-full bg-[url(/images/banner.jpg)] bg-cover bg-top bg-no-repeat"
          ></div>
          <div
            ref={img2}
            className="absolute inset-0 h-dvh w-full bg-[url(/images/banner-2.jpg)] bg-cover bg-top bg-no-repeat"
          ></div>
        </div>
      </div>
    </>
  );
}
