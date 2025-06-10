import React from 'react'
import AditiHimanchal27 from "../../assets/transformationImages/AditiHimanchal27.jpg";
import SaloniChandigarh34 from "../../assets/transformationImages/SaloniChandigarh34(79-59).jpg";
import Photo617909 from "../../assets/transformationImages/photo_6179091521324828644_y.jpg";
import YashuCanada25 from "../../assets/transformationImages/YashuCanada25(70-60).jpg";
import PriyaSachdevaMathura33 from "../../assets/transformationImages/PriyaSachdevaMathura33.jpg";
import ShagunaFront from "../../assets/transformationImages/ShagunaFront.jpg";
import ShagunaChandigarh23 from "../../assets/transformationImages/ShagunaChandigarh23(85-60).jpg";
import AbhishekKhusbhu2928 from "../../assets/transformationImages/AbhishekKhusbhu2928.jpg";




const images = [
    { src: AditiHimanchal27, name: "Aditi, Himanchal, Age 27" },
    { src: SaloniChandigarh34, name: "Saloni, Chandigarh, Age 34 (From 79Kg to 59Kg)" },
    { src: Photo617909, name: "" },
    { src: YashuCanada25, name: "Yashu, Canada, Age 25 (From 70Kg to 60Kg)" },
    { src: PriyaSachdevaMathura33, name: "Priya Sachdeva, Mathura, Age 33" },
    { src: ShagunaFront, name: "Shaguna" },
    { src: ShagunaChandigarh23, name: "Shaguna, Chandigarh, Age 23 (From 85Kg to 60Kg)" },
    { src: AbhishekKhusbhu2928, name: "Abhishek(Age-29) & Khusbhu(Age-28)" },
  ];


const PhotosTransformation = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {images.map((image, index) => (
        <div key={index} className="rounded-2xl shadow-lg overflow-hidden">
          <img
            src={image.src}
            alt={image.name}
            className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300 max-w-xs  rounded-lg shadow"
          />
          <div className="p-2 text-center bg-white">
            <p className="text-sm text-gray-700 font-medium">{image.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PhotosTransformation;
