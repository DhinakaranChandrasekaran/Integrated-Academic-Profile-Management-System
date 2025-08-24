import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      {/* Student Profile Section */}
      <div className="home-wrapper">
        <h2 className="home-title">SIET Student Profiles</h2>
        <div className="home-section">
          <div className="home-image">
            <img src="/images/student-profile/main-profile.jpg" alt="Student Team" />
          </div>
          <div className="home-info">
            <p>
              The SIET (Student Academic Profile) system is a comprehensive platform
              to showcase student achievements, skills, and academic progress.
            </p>
            <p>
              Students can build a strong academic identity and showcase their
              journey semester after semester.
            </p>
            <div className="home-box">
              <Link to="/student-profile/welcome" className="home-link">
                Visit Student Profiles →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Update Profile Section */}
      <div className="home-wrapper">
        <h2 className="home-title">Update Your Profile</h2>
        <div className="home-section">
          <div className="home-info">
            <p>
              Update your academic and contact information to keep your placement profile accurate.
            </p>
            <p>
              Ensure your latest details are available for training and placement purposes.
            </p>
            <div className="home-box">
              <Link to="/sign-in?next=update-profile" className="home-link">
                Update Profile →
              </Link>
            </div>
          </div>
          <div className="home-image">
            <img src="/images/Update-image.jpg" alt="Update Form" />
          </div>
        </div>
      </div>

      {/* Styles */}
      <style>{`
        .home-wrapper {
          width: 100%;
          background-color: #f0f8f0;
          padding: 0;
          margin-top: 20px;
        }

        .home-title {
          text-align: center;
          color: green;
          font-size: 2.4rem;
          padding: 1rem 0;
          background-color: white;
          margin-top: 20px;
        }

        .home-section {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          column-gap: 2.5cm;
        }

        .home-image img {
          width: 300px;
          height: 300px;
          object-fit: cover;
          border-radius: 50%;
          margin: 0 2cm;
          box-shadow: 0 0 25px rgba(0, 128, 0, 0.35);
          transition: box-shadow 0.3s ease-in-out;
        }

        .home-image img:hover {
          box-shadow: 0 0 35px rgba(0, 128, 0, 0.55);
        }

        .home-info {
          flex: 1;
          max-width: calc(100% - 270px - 2cm);
          margin: 1rem;
        }

        .home-info p {
          color: #444;
          font-size: 1.2rem;
          line-height: 1.8;
          margin-bottom: 1.2rem;
        }

        .home-box {
          display: inline-block;
          padding: 1rem 1.5rem;
          border: 2px solid #228b22;
          background-color: #ffffff;
          border-radius: 10px;
          transition: background-color 0.3s ease;
          margin-top: 1rem;
        }

        .home-box:hover {
          background-color: #eaf8ea;
        }

        .home-link {
          color: #228b22;
          font-weight: bold;
          font-size: 1.1rem;
          text-decoration: none;
        }

        .home-link:hover {
          text-decoration: underline;
        }

        @media (max-width: 768px) {
          .home-section {
            flex-direction: column;
            gap: 2rem;
          }

          .home-image img {
            margin: 0 auto;
          }

          .home-info {
            max-width: 100%;
            text-align: center;
          }
        }
      `}</style>
    </>
  );
};

export default HomePage;
