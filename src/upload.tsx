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
// import React, { useEffect, useState } from 'react';
// import Image from'./interface/image'
// interface UploadProjectProps {
//   id?: string | null; // id can be a number, null, or undefined
// }
// const UploadProject = ({ id = null }: UploadProjectProps) => {
//   const [image, setImage] = useState<File | null>(null);
 
//   const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files?.[0];
//     if (file) {
//       setImage(file);
//     }
//   };

//   // const handleParentChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//   //   setParentId(event.target.value || null); // Set parentId or null if no selection
//   // };

//   const handleUpload = async () => {
//     if (!image) {
//       alert('Please select an image to upload');
//       return;
//     }

//     const formData = new FormData();
//     formData.append('image', image);
//     if (id) 
//     {
//       formData.append('parentId', id);
//     }
//     try {
//       const response = await fetch('http://localhost:3000/upload/', {
//         method: 'POST',
//         body: formData,
//       });

//       const result = await response.json();
//       alert('Image uploaded successfully!');
//     } catch (error) {
//       console.error('Error uploading image:', error);
//       alert('Failed to upload image');
//     }
//   };

//   return (
//     <div>
//         <p >ao access the protectedto access the protectedd pageEnter password to access the protected pageEnter password to access the protected pageEnter password to access the protected pageEnter password to access the protected pageEnter password to access the protected pageEnter password to access the protected pageEnter password to access the protected pageEnter password to access the protected pageEnter password to access the protected pageEnter password to access the protected pageEnter password to access the protected pageEnter password to access the protected pageEnter password to access the protected pageEnter password to access the protected pageEnter password to access the protected pageEnter password to access the protected pageEnter password to access the protected pageEnter password to access the protected pageEnter password to access the protected pageEnter password to access the protected pageEnter password to access the protected pageEnter password to access the protected pageEnter password to access the p</p>
                                     
//       <h1>Upload Image</h1>
//       <input type="file" onChange={handleImageChange} />
      
//       {/* <div>
//         <label htmlFor="parent">Choose a parent image:</label>
//         <select id="parent" onChange={handleParentChange}>
//           <option value="">No Parent</option>
//           {parentImages.map((img) => (
//             <option key={img.id} value={img.id}>
//               {img.name}
//             </option>
//           ))}
//         </select>
//       </div> */}
//       <button onClick={handleUpload}>Upload Image</button>
//     </div>
//   );
// };

// // export default UploadProject;
// import React, { useEffect, useState } from 'react';
// import Image from './interface/image';

// interface UploadProjectProps {
//   id?: string | null; // id can be a number, null, or undefined
// }

// const UploadProject = ({ id = null }: UploadProjectProps) => {
//   const [image, setImage] = useState<File | null>(null);
//   const [password, setPassword] = useState<string>(''); // Store the password input
//   const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false); // To track authentication status

//   useEffect(() => {
//     setIsAuthenticated(false);
//     // Check if the user is authenticated when the component mounts
//     localStorage.removeItem('isAuthenticated');

//     // const storedAuth = localStorage.getItem('isAuthenticated');
//     // if (storedAuth === 'true') {
//     //   setIsAuthenticated(true);
//     // }
//   }, []);

//   const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files?.[0];
//     if (file) {
//       setImage(file);
//     }
//   };

//   const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setPassword(event.target.value); // Update the password input field
//   };

//   const handlePasswordSubmit = () => {
//     // Validate the password (You can replace this with more secure logic)
//     if (password === '12345') {
//       localStorage.setItem('isAuthenticated', 'true'); // Store authentication status
//       setIsAuthenticated(true); // Update the state to reflect authentication
//       // alert('Password correct, access granted.');
//     } else {
//       alert('Incorrect password');
//     }
//   };

//   const handleUpload = async () => {
//     if (!isAuthenticated) {
//       alert('Please enter the correct password to access the upload functionality.');
//       return;
//     }
//     if (!image) {
//       alert('Please select an image to upload');
//       return;
//     }

//     const formData = new FormData();
//     formData.append('image', image);
//     if (id) {
//       formData.append('parentId', id);
//     }

//     try {
//       const response = await fetch('http://localhost:3000/upload/', {
//         method: 'POST',
//         body: formData,
//       });

//       const result = await response.json();
//       alert('Image uploaded successfully!');
//     } catch (error) {
//       console.error('Error uploading image:', error);
//       alert('Failed to upload image');
//     }

//   };

//   return (
//     <div>  
//       {!isAuthenticated && (
//         <div>
//           <h2>Enter Password to Access Upload</h2>
//           <h2>Enter Password to Access Upload</h2>
//           <h2>Enter Password to Access Upload</h2>
//           <h2>Enter Password to Access Upload</h2>
//           <h2>Enter Password to Access Upload</h2>

//           <input
//             type="password"
//             value={password}
//             onChange={handlePasswordChange}
//             placeholder="Enter password"
//           />
//           <button onClick={handlePasswordSubmit}>Submit</button>
//         </div>
//       )}
      
//       {isAuthenticated && (
//         <div>
//           <h1>Upload Image</h1>        
//           <h1>Upload Image</h1>
//           <h1>Upload Image</h1>
//           <h1>Upload Image</h1>
//           <h1>Upload Image</h1>
//           <h1>Upload Image</h1>
//           <h1>Upload Image</h1>

//           <input type="file" onChange={handleImageChange} />
//           <button onClick={handleUpload}>Upload Image</button>
//         </div>
//       )}
//     </div>
//   );

// };

// export default UploadProject;
import React, { useState } from 'react';

interface UploadProjectProps {
  id?: string | null;
  onUploadSuccess?: () => void; // פונקציה שתיקרא לאחר העלאה מוצלחת
}

const UploadPoject = ({ id = null, onUploadSuccess }: UploadProjectProps) => {
  const [image, setImage] = useState<File | null>(null);
  // const [imagePreview, setImagePreview] = useState<string | null>(null); // תצוגת מקדימה של התמונה


  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImage(file);
      // const previewUrl = URL.createObjectURL(file);
      // setImagePreview(previewUrl);
    }
  };

  const handleUpload = async () => {
    if (!image) {
      alert('Please select an image to upload');
      return;
    }

    const formData = new FormData();
    formData.append('image', image);
    if (id) {
      formData.append('parentId', id);
    }

    try {
      const response = await fetch('http://localhost:3000/upload/', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        alert('Image uploaded successfully!');
        setImage(null); // איפוס בחירת התמונה
        if (onUploadSuccess) onUploadSuccess(); // קורא ל-callback
      } else {
        throw new Error('Failed to upload image');
      }
    } catch (error) {
      console.error('Error uploading image:', error);
      alert('Failed to upload image');
    }
  };

  return (
    <div>
      <h1>Upload Image</h1>
      <input type="file" onChange={handleImageChange} />
      <button onClick={handleUpload}>Upload Image</button>
      {/* {imagePreview && <img src={imagePreview} alt="Preview" width="200" height="200" />} תצוגת מקדימה */}
    </div>
  );
};

export default UploadPoject;