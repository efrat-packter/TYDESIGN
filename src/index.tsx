// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import HomePage from './home-page';

// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
// root.render(
//   <React.StrictMode>
//   <HomePage/>
//   </React.StrictMode>
// );

// reportWebVitals();
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import HomePage from './home-page';
import PhotoGallery from './PhotoGallery';
import ProjectsGallery from './ProjectsGallery';
import NavBar from './Nav';
import AboutSection from './about';
import FileUploadForm from './FormComonent';
import Layout from './Layout';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="ProjectsGallery" element={<ProjectsGallery />} />
        <Route path="PhotoGallery/:imageId" element={<PhotoGallery />} />
        <Route path="AboutSection" element={<AboutSection />} />
        <Route path="FileUploadForm" element={<FileUploadForm />} />
        </Route>

      </Routes>
    </Router>
  </React.StrictMode>
);