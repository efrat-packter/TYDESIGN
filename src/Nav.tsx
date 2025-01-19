// import React from "react";
// import { useNavigate } from "react-router-dom";

// const NavBar: React.FC = () => {
//    const navigate = useNavigate();
//    const handleImageClick = (id: string) => {
    
//     navigate(`/${id}`);
//   };
//   return (
//     <div className="formContainer">
//     <nav className="navbar">
//       <ul className="navbar-links">
//         <li onClick={() => handleImageClick("")}>דף ראשי</li>
//         <li onClick={() => handleImageClick("ProjectsGallery")}>פרויקטים</li>
//         <li onClick={() => handleImageClick("AboutSection")}>אודות</li>
//         <li onClick={() => handleImageClick("FileUploadForm")}>צור קשר</li>
//       </ul>
//     </nav>
//     </div>
//   );
// };

// export default NavBar;
import React from "react";
import { useNavigate } from "react-router-dom";

const NavBar: React.FC = () => {
  const navigate = useNavigate();

  const handleImageClick = (id: string) => {
    navigate(`/${id}`);
  };

  return (
    <div className="main-container">
      <nav className="navbar">
        <div className="logo">MySite</div>
        <ul className="navbar-links">
          <li onClick={() => handleImageClick("")}>דף ראשי</li>
          <li onClick={() => handleImageClick("ProjectsGallery")}>פרויקטים</li>
          <li onClick={() => handleImageClick("AboutSection")}>אודות</li>
          <li onClick={() => handleImageClick("FileUploadForm")}>צור קשר</li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
