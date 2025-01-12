import React from "react";
import { Box, Typography } from "@mui/material";
import PhotoGallery from './PhotoGallery'
import { useNavigate } from "react-router-dom";
import { GetParentImages } from "./Images";

const Gallery:React.FC= () => {   
  const images = GetParentImages();   

   const navigate = useNavigate();
   const handleImageClick = (id: number) => {
    navigate(`/PhotoGallery/${id}`);
  };
  return (

    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 2,
        padding: 2,
        "@media (max-width: 900px)": {
          gridTemplateColumns: "repeat(2, 1fr)",
        },
        "@media (max-width: 600px)": {
          gridTemplateColumns: "repeat(1, 1fr)",
        },
      }}
    >
      {images.map((image,index) => (   

        <Box
          key={image.id}
          sx={{
            border: "1px solid #ddd",
            borderRadius: 2,
            overflow: "hidden",
            cursor: "pointer",
            "&:hover": { boxShadow: 3 },
            textAlign: "center",
          }}
        >

          <div key={image.id} onClick={() => handleImageClick(image.id)} style={{ cursor: 'pointer' }}>
  
          <img               

            src={`http://localhost:3000/${(images[index]).path}`}
            alt={image.name}
            style={{ width: "100%", height: "auto", display: "block" }}
          />
          </div>
          {/* <Typography variant="h6" sx={{ padding: 1 }}>
            {image.name}
          </Typography> */}
        </Box>
      ))}
    </Box>
  );
};
export default Gallery;
