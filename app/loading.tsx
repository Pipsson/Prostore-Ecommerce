import React from 'react'
import loader from '@/assets/loader.gif';
import Image from 'next/image';

function LoadingPage() {
  return (
    <div
     style={{
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
        height : '100vh',
        width : '100vw',
     }}
    >
        <Image
          src={loader}
          alt="Loading..."
          width={100}
          height={100}
          className="mx-auto mt-20"
        />
    </div>
  )
}

export default LoadingPage