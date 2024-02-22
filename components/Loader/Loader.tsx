"use client";
import { set } from 'firebase/database';
import * as React from 'react'
import { SVGProps } from 'react'
import { useEffect ,useState } from 'react';


type Props = {
    connected: boolean,
    loading: boolean
}

const Loader = (props: Props) => {
    const [showText, setShowText] = useState(false);
    useEffect(() => {
      const timer = setTimeout(() => {
        setShowText(true);
      }, 5000);
  
      return () => clearTimeout(timer); // This will clear the timer if the component is unmounted before the 5 seconds
    }, []);

  return (
    <div className="flex flex-col gap-2 justify-center items-center  w-[80vw] h-64">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 300 150"
      {...props}
      className="grayscale max-h-12"
    >
      <path
        fill="none"
        stroke="#FF156D"
        strokeDasharray="300 385"
        strokeLinecap="round"
        strokeWidth={15}
        d="M275 75c0 31-27 50-50 50-58 0-92-100-150-100-28 0-50 22-50 50s23 50 50 50c58 0 92-100 150-100 24 0 50 19 50 50Z"
      >
        <animate
          attributeName="stroke-dashoffset"
          calcMode="spline"
          dur={2}
          keySplines="0 0 1 1"
          repeatCount="indefinite"
          values="685;-685"
        />
      </path>
    </svg>
    {showText && <p className='text-sm font-thin'>{
        !props.connected ? "Initial connection may take some time" : "Answer is being processed..."
    }</p>}
  </div>
  )
}

export default Loader
