import React from "react";
import { Box, Typography } from "@mui/material";
import PhotoGallery from './PhotoGallery'
import { useNavigate } from "react-router-dom";
import { GetParentImages } from "./Images";
import { Height } from "@mui/icons-material";

const Gallery:React.FC= () => {   
  const images = GetParentImages();   

   const navigate = useNavigate();
   const handleImageClick = (id: number) => {
    navigate(`/PhotoGallery/${id}`);
  };
  return (<div className="main-container">
<div className="projectGallery">

<Box
  sx={{
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)", // 3 cards per row
    gap: 4, // Space between the cards
    padding: 2,
    "@media (max-width: 900px)": {
      gridTemplateColumns: "repeat(2, 1fr)", // 2 cards per row for medium screens
    },
    "@media (max-width: 600px)": {
      gridTemplateColumns: "repeat(1, 1fr)", // 1 card per row for small screens
    },
  }}
>
  {images.map((image, index) => (
    <Box
      key={image.id}
      sx={{
        border: "1px solid #ddd",
        borderRadius: 0,
        overflow: "hidden",
        cursor: "pointer",
        "&:hover": { boxShadow: 3 },
        textAlign: "center",
        height: 400, // Increased height
        width: "100%", // Full width of the container
      }}
      onClick={() => handleImageClick(image.id)}
    >
      <img
        src={`http://localhost:3000/${images[index].path}`}
        alt={image.name}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover", // Ensures the image covers the container
        }}
      />
    </Box>
  ))}
</Box>

    </div></div>
  );
};
export default Gallery;
