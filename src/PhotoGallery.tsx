
import React, { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { GetChildImages ,GetImage} from './Images';
import UploadPoject from './upload';
interface Image {
  id: number;
  path: string;
  name: string;
}

const PhotoGallery = () => {
    const location = useLocation();
  const { url } = (location.state as { url: string }) || {}; // Type assertion for state
  const [lightbox, setLightbox] = useState<{
    isOpen: boolean;
    currentIndex: number | null;
  }>({ isOpen: false, currentIndex: null });
  const [refreshKey, setRefreshKey] = useState(0); // מפתח רענון
    const { imageId } = useParams();
    const images = GetChildImages(Number(imageId), refreshKey);
    const mainImage=GetImage(Number(imageId));

    
    const openLightbox = (index: number) => {
    setLightbox({ isOpen: true, currentIndex: index });
  };

  const closeLightbox = () => {
    setLightbox({ isOpen: false, currentIndex: null });
  };
  const showNextImage = () => {
    setLightbox((prev) => {
      if (prev.currentIndex === null) {
        return prev; // No change if currentIndex is null
      }
      return {
        ...prev,
        currentIndex: (prev.currentIndex + 1) % images.length, // Loop to the start
      };
    });
  };
  
  const showPrevImage = () => {
    setLightbox((prev) => {
      if (prev.currentIndex === null) {
        return prev; // No change if currentIndex is null
      }
      return {
        ...prev,
        currentIndex:
          (prev.currentIndex - 1 + images.length) % images.length, // Loop to the end
      };
    });
  };
    const handleUploadSuccess = () => {
    setRefreshKey((prevKey) => prevKey + 1); // מעדכן את המפתח
  };
  const shouldDisplayUpload = url=== 'protected';
  return (
    <div>


     { shouldDisplayUpload && <UploadPoject id={imageId} onUploadSuccess={handleUploadSuccess} />} 
<div className="top-section">
<img
            src={`http://localhost:3000/${mainImage?.path}`}
            alt={mainImage?.name}
            className="top-image"          />
  <h1 className="top-text">{mainImage?.title}</h1>
{mainImage?.text}</div>
    <div className="gallery-container">
      {images.map((image, index) => (
        <div
          key={image.id}
          className="gallery-item"
          onClick={() => openLightbox(index)}
        >
          <img
            src={`http://localhost:3000/${image.path}`}
            alt={image.name}
            className="gallery-image"
          />
        </div>
      ))}

      {/* Lightbox Overlay */}
      {lightbox.isOpen && lightbox.currentIndex !== null && (
        <div className="lightbox-overlay active">
          <img
            src={`http://localhost:3000/${images[lightbox.currentIndex].path}`}
            alt={images[lightbox.currentIndex].name}
            className="lightbox-image"
          />
          <button className="lightbox-close" onClick={closeLightbox}>
            ✕
          </button>
          <button className="lightbox-prev" onClick={showPrevImage}>
            ‹
          </button>
          <button className="lightbox-next" onClick={showNextImage}>
            ›
          </button>
        </div>
      )}
    </div></div>
  );
};

export default PhotoGallery;
