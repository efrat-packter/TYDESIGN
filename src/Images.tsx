
// import React, { useState, useEffect } from 'react';
// import Image from './interface/image'

// const GetParentImages = () => {
//     const [images, setImages] = useState<Image[]>([]);
//     useEffect(() => {
//       const fetchImages = async () => {
//         try {
//           const response = await fetch("http://localhost:3000/images/getParentImages", {
//             method: "GET",
//             headers: {
//               "Content-Type": "application/json",
//             },
//           });
//           if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//           }
//           const data = await response.json();
//           setImages(data);
//         } catch (error) {
//           console.error("Error fetching images:", error);
//         }
//       };
//       fetchImages();
//     }, []);
//     return images;
//   };
 



// const GetChildImages = (id: number | undefined) => {
//   const [images, setImages] = useState<Image[]>([]);
//     useEffect(() => {
//       const fetchImages = async () => {
//         try {
//           const response = await fetch(`http://localhost:3000/images/getChildImages/${id}`, {
//             method: "GET",
//             headers: {
//               "Content-Type": "application/json",
//             },
//           });
//           if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//           }
//           const data = await response.json();
//           console.log(data)
//           setImages(data);
//         } catch (error) {
//           console.error("Error fetching images:", error);
//         }
//       };
//       fetchImages();
//     }, []);
//     return images;
// };
//  export {GetParentImages,GetChildImages};

import React, { useState, useEffect } from 'react';
import Image from './interface/image'

const GetParentImages = () => {
    const [images, setImages] = useState<Image[]>([]);
    useEffect(() => {
      const fetchImages = async () => {
        try {
          const response = await fetch("http://localhost:3000/images/getParentImages", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
          setImages(data);
        } catch (error) {
          console.error("Error fetching images:", error);
        }
      };
      fetchImages();
    }, []);
    return images;
  };
 



const GetChildImages = (id: number | undefined, refreshKey: number) => {
  const [images, setImages] = useState<Image[]>([]);
  useEffect(() => {
    if(id === undefined) return;
      const fetchImages = async () => {
        try {
          const response = await fetch(`http://localhost:3000/images/getChildImages/${id}`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
          setImages(data);
        } catch (error) {
          console.error("Error fetching images:", error);
        }
      };
      fetchImages();
    }, [id, refreshKey]);
    return images;
};
 export {GetParentImages,GetChildImages};
