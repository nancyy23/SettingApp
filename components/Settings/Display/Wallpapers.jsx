import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import image1 from '../images/o.jpg';
import image2 from '../images/p.jpg';
import image3 from '../images/q.jpg';
import image4 from '../images/r.jpg';
import image5 from '../images/s.jpg';

const Wallpapers = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const wallpapers = [
    {
      id: 1,
      thumbnail: image1,
      fullSize: image1,
    },
    {
      id: 2,
      thumbnail: image2,
      fullSize: image2,
    },
    {
      id: 3,
      thumbnail: image3,
      fullSize: image3,
    },
    {
      id: 4,
      thumbnail: image4,
      fullSize: image4,
    },
    {
      id: 5,
      thumbnail: image5,
      fullSize: image5,
    },
  ];

  const openImage = (image) => {
    if (selectedImage === image) {
      setSelectedImage(null);
    } else {
      setSelectedImage(image);
    }
  };

  return (
    <div className="container" style={{ backgroundImage: 'url(your-background-image.jpg)' }}>
      <div className="header">
        <NavLink to="../Display" className="arrow-icon link-no-underline">
          &#8592;
        </NavLink>
        <h1>Wallpapers</h1>
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
            onClick={() => openImage(null)} 
            className="full-size-image"
          />
        </div>
      )}
    </div>
  );
};

export default Wallpapers;
