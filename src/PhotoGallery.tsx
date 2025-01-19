// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { GetChildImages } from './Images';
// import UploadPoject from './upload';
// import { PhotoProvider, PhotoView } from 'react-photo-view';
// import 'react-photo-view/dist/react-photo-view.css';
// // import Zoom from 'react-medium-image-zoom'; // import the zoom component
// // import 'react-medium-image-zoom/dist/styles.css';

// const PhotoGallery = () => {
//   const { imageId } = useParams();
//   const images = GetChildImages(Number(imageId));  // Use the custom hook
//   const [lightboxImage, setLightboxImage] = useState(null);
  
//   // if (!images.length) {
//   //   return <div>Loading images...</div>;
//   // }

//   return (
//     <div className="main-container">
//       <h1>Photo Gallery</h1>
//       <UploadPoject id={imageId}></UploadPoject>

//       {images.length ? (
//         <PhotoProvider>
//         <div className="gallery-container">
          
//           {images.map((image, index) => (
//             <div key={image.id} className="gallery-item">
//               <PhotoView src={`http://localhost:3000/${(images[index]).path}`}>
//               <img
//                 src={`http://localhost:3000/${(images[index]).path}`}
//                 alt={image.name}
//                 className="gallery-image"
//               />
//               </PhotoView>
//             </div>
//           ))}
//         </div>
//         </PhotoProvider>
//       ) : (
//         <p>No images found.</p>
//       )}
//     </div>
//   );
// };

// export default PhotoGallery;



import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { GetChildImages } from './Images';
import UploadPoject from './upload';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const PhotoGallery = () => {
  const { imageId } = useParams();
  const [refreshKey, setRefreshKey] = useState(0); // מפתח רענון
  const images = GetChildImages(Number(imageId), refreshKey);

  const handleUploadSuccess = () => {
    setRefreshKey((prevKey) => prevKey + 1); // מעדכן את המפתח
  };


  return (
    <div>
      <h1>Photo Gallery</h1>
      {/* העברת פונקציית הרענון כ-prop לקומפוננטת העלאת התמונות */}
      <UploadPoject id={imageId} onUploadSuccess={handleUploadSuccess} />

      {images.length ? (
        <PhotoProvider>
          <div className="gallery-container">
            {images.map((image, index) => (
              <div key={image.id || index} className="gallery-item">
                <PhotoView src={`http://localhost:3000/${image.path}`}>
                  <img
                    src={`http://localhost:3000/${image.path}`}
                    alt={image.name}
                    className="gallery-image"
                  />
                </PhotoView>
              </div>
            ))}
          </div>
        </PhotoProvider>
      ) : (
        <p>No images found.</p>
      )}
    </div>
  );
};

export default PhotoGallery;
