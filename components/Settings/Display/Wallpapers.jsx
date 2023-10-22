import React, { useState } from 'react';
import image1 from '../images/a.png'; // Adjust the path as needed
import image2 from '../images/b.png'; 
import { NavLink } from 'react-router-dom';// Adjust the path as needed

const Wallpapers = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const wallpapers = [
    {
      id: 1,
      thumbnail: image1,
      fullSize: 'image1.png',
    },
    {
      id: 2,
      thumbnail: image2,
      fullSize: 'image2.png',
    },
    {
        id: 2,
        thumbnail: image2,
        fullSize: 'image2.png',
      },
      {
        id: 2,
        thumbnail: image2,
        fullSize: 'image2.png',
      },
      {
        id: 2,
        thumbnail: image2,
        fullSize: 'image2.png',
      },
    
  ];

  const openImage = (image) => {
    if (selectedImage === image) {
      // If the clicked image is already open, close it
      setSelectedImage(null);
    } else {
      // Otherwise, open the clicked image
      setSelectedImage(image);
    }
  };

  return (
    <div>
        <div className="container">
      <div className="header">
        <NavLink to="../Display" className="arrow-icon link-no-underline">
          &#8592;
        </NavLink>
        <h1>Display & Brightness</h1>
      </div>
      <div className="wallpaper-thumbnails">
        {wallpapers.map((wallpaper) => (
          <img
            key={wallpaper.id}
            src={wallpaper.thumbnail}
            alt={`Thumbnail ${wallpaper.id}`}
            onClick={() => openImage(wallpaper.fullSize)}
            className={selectedImage === wallpaper.fullSize ? "thumbnail-image-expanded" : "thumbnail-image"}
          />
        ))}
      </div>

      {selectedImage && (
        <div className="wallpaper-modal">
          <img
            src={selectedImage}
            alt=""
            onClick={() => openImage(null)} // Close the image when clicked
            className="full-size-image"
          />
        </div>
      )}
    </div>
    </div>
  );
};

export default Wallpapers;
