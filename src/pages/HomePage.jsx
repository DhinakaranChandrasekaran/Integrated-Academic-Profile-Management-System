import React from 'react';
import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel';
import AboutCollege from '../components/AboutCollege';
import ChairmanPrincipal from '../components/ChairmanPrincipal';
import Department from '../components/Department';
import StudentDomains from '../components/StudentDomains';
import Toppers from '../components/Toppers';
import Footer from '../components/Footer';
import PlacementSection from '../components/PlacementSection';
import StudentProfilePage from '../components/StudentProfilePage';
import StudentProfileUpdateForm from '../components/StudentProfileUpdateForm'; // ✅ NEW Import

const HomePage = () => {
  return (
    <div>
      {/* College Banner */}
      <div style={{ width: "100%", overflow: "hidden" }}>
        <img
          src="/images/college-banner.jpg"
          alt="College Banner"
          style={{
            width: "100%",
            height: "auto",
            display: "block"
          }}
        />
      </div>
      
      <Navbar />
      <Carousel />
      <AboutCollege />
      <ChairmanPrincipal />
      <Department />
      <PlacementSection />
      <StudentProfilePage />
      <StudentProfileUpdateForm /> {/* ✅ Inserted here */}
      <StudentDomains />
      <Toppers />
      <Footer />
    </div>
  );
};

export default HomePage;
