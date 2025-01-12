import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { GetChildImages } from './Images';
import UploadPoject from './upload';

const PhotoGallery = () => {
    const { imageId } = useParams(); 
    const images = GetChildImages(Number(imageId));  // Use the custom hook

  // if (!images.length) {
  //   return <div>Loading images...</div>;
  // }

  return (
    <div>
      <h1>Photo Gallery</h1>
      <UploadPoject id={imageId}></UploadPoject>
      {images.length ? (
        <div>

          {images.map((image,index) => (
            <div key={image.id}>
                          

              <img src={`http://localhost:3000/${(images[index]).path}`} alt={image.name} />
            </div>
          ))}
        </div>
      ) : (
        <p>No images found.</p>
      )}
    </div>
  );
};

export default PhotoGallery;