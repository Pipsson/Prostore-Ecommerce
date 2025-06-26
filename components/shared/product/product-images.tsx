"use client";
import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import React from "react";

const ProductImages = ({ images }: { images: string[] }) => {
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <div className="space-y-4">
      <Image
        src={images[currentImage]}
        alt="product image"
        width={1000}
        height={1000}
        className="min-h-[300px] object-centera object-cover"
      />
      <div className="flex">
        {
            images.map((image, index) => (
             <div key={image} onClick={() => setCurrentImage(index)} className={cn('border mr-2 cursor-pointer hover:border-orange-600', currentImage === index && 'border-orange-500')}>
                   <Image
                key={index}
                src={image}
                alt="product image"
                width={200}
                height={200}
                className="min-h-[300px] object-centera object-cover"
            />
             </div>
            ))
        }
      </div>
    </div>
  );
};

export default ProductImages;
