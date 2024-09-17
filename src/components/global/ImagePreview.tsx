'use client';
import Image from 'next/image';
import React, { useState, FC } from 'react';

type ImagePreviewProps = {
  imageUrl: string;
  onClose: () => void;
};

const ImagePreview: FC<ImagePreviewProps> = ({ imageUrl, onClose }) => {
  const [image, setImage] = useState(imageUrl);
  const handleContainerClick = (e: any) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 rounded-md"
      onClick={handleContainerClick}
    >
      <div className="space-y-4 bg-white rounded-xl p-5">
        <Image
          src={image}
          alt="Preview"
          className="object-cover"
          width={500}
          height={500}
        />
        <div className="flex items-center justify-center space-x-4">
          {[
            '/products/item1.png',
            '/products/item2.png',
            '/products/item3.png',
          ].map((img, i) => (
            <Image
              key={i}
              onClick={() => setImage(img)}
              src={img}
              alt="product"
              width={60}
              height={60}
              className={`cursor-pointer ${img === image ? 'border border-slate-400 rounded-lg' : ''}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImagePreview;
