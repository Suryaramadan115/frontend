"use client"
import React, { useState, useEffect } from 'react';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const data = [
    // Isi data carousel disini
    // Misalnya: { image: 'url_gambar', caption: 'Deskripsi gambar' }
    { image :"/banner1.jpg",caption :"banner1"},
    { image :"/banner2.jpg",caption :"banner2"}

  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % data.length;
      setCurrentIndex(nextIndex);
    }, 3000); // Ganti 3000 dengan interval yang diinginkan (dalam milidetik)

    return () => clearInterval(interval);
  }, [currentIndex, data.length]);

  return (
    <div className=" h-full  w-full mt-[20px]">
      {data.map((item, index) => (
        <div
          key={index}
          className={`absolute w-full ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          } transition-opacity duration-500 ease-in-out`}
        >
          <img src={item.image} alt={item.caption} className="w-full object-fill h-[400px]" />
       
        </div>
      ))}
    </div>
  );
};

export default Carousel;
