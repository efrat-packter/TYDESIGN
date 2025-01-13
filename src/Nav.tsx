import React from "react";
import { useNavigate } from "react-router-dom";

const NavBar: React.FC = () => {
   const navigate = useNavigate();
   const handleImageClick = (id: string) => {
    
    navigate(`/${id}`);
  };
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li onClick={() => handleImageClick("")}>דף ראשי</li>
        <li onClick={() => handleImageClick("ProjectsGallery")}>פרויקטים</li>
        <li onClick={() => handleImageClick("AboutSection")}>אודות</li>
        <li onClick={() => handleImageClick("FileUploadForm")}>צור קשר</li>
      </ul>
    </nav>
  );
};

export default NavBar;
