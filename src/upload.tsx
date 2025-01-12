// import React, { useState } from 'react';

// const UploadImage = () => {
//   const [image, setImage] = useState<File | null>(null); // Explicitly define the state type

//   const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files?.[0]; // Get the first file if any
//     if (file) {
//       setImage(file);
//     }
//   };

//   const handleUpload = async () => {
//     if (!image) return;

//     const formData = new FormData();
//     formData.append('image', image);

//     try {
//       const response = await fetch('http://localhost:3000/upload/', {
//         method: 'POST',
//         body: formData,
//       });

//       const result = await response.json();
//       console.log(result);
//       alert('Image uploaded successfully!');
//     } catch (error) {
//       console.error('Error uploading image:', error);
//       alert('Failed to upload image');
//     }
//   };

//   return (
//     <div>
//       <input type="file" onChange={handleImageChange} />
//       <button onClick={handleUpload}>Upload Image</button>
//     </div>
//   );
// };

// export default UploadImage;
import React, { useEffect, useState } from 'react';
import Image from'./interface/image'
interface UploadProjectProps {
  id?: string | null; // id can be a number, null, or undefined
}
const UploadPoject = ({ id = null }: UploadProjectProps) => {
  const [image, setImage] = useState<File | null>(null);
  // const [parentId, setParentId] = useState<string | null>(null);
  // const [parentImages, setParentImages] = useState<Image[]>([]);

  // // Fetch parent images
  // useEffect(() => {
  //   const fetchParentImages = async () => {
  //     try {
  //       const response = await fetch('http://localhost:3000/images/');
  //       const data = await response.json();
  //       setParentImages(data.filter((img: Image) => !img.parentId)); // Filter only parent images
  //     } catch (error) {
  //       console.error('Error fetching images:', error);
  //     }
  //   };

  //   fetchParentImages();
  // }, []);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImage(file);
    }
  };

  // const handleParentChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
  //   setParentId(event.target.value || null); // Set parentId or null if no selection
  // };

  const handleUpload = async () => {
    if (!image) {
      alert('Please select an image to upload');
      return;
    }

    const formData = new FormData();
    formData.append('image', image);
    if (id) 
    {
      formData.append('parentId', id);
    }
    try {
      const response = await fetch('http://localhost:3000/upload/', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      alert('Image uploaded successfully!');
    } catch (error) {
      console.error('Error uploading image:', error);
      alert('Failed to upload image');
    }
  };

  return (
    <div>
      <h1>Upload Image</h1>
      <input type="file" onChange={handleImageChange} />
      
      {/* <div>
        <label htmlFor="parent">Choose a parent image:</label>
        <select id="parent" onChange={handleParentChange}>
          <option value="">No Parent</option>
          {parentImages.map((img) => (
            <option key={img.id} value={img.id}>
              {img.name}
            </option>
          ))}
        </select>
      </div> */}
      <button onClick={handleUpload}>Upload Image</button>
    </div>
  );
};

export default UploadPoject;
