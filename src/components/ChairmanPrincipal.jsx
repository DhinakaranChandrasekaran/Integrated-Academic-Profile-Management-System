import React from 'react';
import { useNavigate } from 'react-router-dom';

const ChairmanPrincipal = () => {
  const navigate = useNavigate();

  return (
    <>
      <h2 className="section-title">Our Leadership</h2>
      <div className="leadership-row">
        {/* Chairman Card */}
        <div className="leader-section">
          <h3 className="role-title">Chairman</h3>
          <div className="leader-card clickable" onClick={() => navigate('/ChairmanDetails')}>
            <img src="/images/chairman.jpg" alt="Chairman" className="leader-image" />
            <div className="leader-info">
              <h4>Dr. S. Thangavelu</h4>
              <p className="designation">Chairman, SIET</p>
              <p className="description">
                Visionary leader with over 25 years of experience in educational excellence,
                dedicated to fostering innovation and holistic growth.
              </p>
            </div>
          </div>
        </div>

        {/* Principal Card */}
        <div className="leader-section">
          <h3 className="role-title">Principal</h3>
          <div className="leader-card clickable" onClick={() => navigate('/PrincipalDetails')}>
            <img src="/images/principal.jpg" alt="Principal" className="leader-image" />
            <div className="leader-info">
              <h4>Dr. N. K. Sakthivel, M.Tech, Ph.D.</h4>
              <p className="designation">Principal, SIET</p>
              <p className="description">
                Academic leader with deep expertise in engineering education and a passion
                for empowering students through innovative learning.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .section-title {
          text-align: center;
          color: green;
          font-size: 2.5rem;
          margin-bottom: 3rem;
        }

        .leadership-row {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          gap: 8rem;
          padding: 2rem 5%;
          background-color: #f0f8f0;
          flex-wrap: nowrap; /* ✅ Keeps both in same row */
        }

        .leader-section {
          width: 50%;
          max-width: 600px;
        }

        .role-title {
          font-size: 1.8rem;
          margin-bottom: 1rem;
          color: green;
          text-align: center;
        }

        .leader-card {
          display: flex;
          align-items: center;
          background-color: #ffffff;
          border-radius: 20px;
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
          padding: 2rem;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .leader-card.clickable {
          cursor: pointer;
        }

        .leader-card.clickable:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 22px rgba(0, 0, 0, 0.15);
        }

        .leader-image {
          width: 140px;
          height: 140px;
          border-radius: 50%;
          object-fit: cover;
          margin-right: 2rem;
          flex-shrink: 0;
        }

        .leader-info h4 {
          font-size: 1.4rem;
          margin-bottom: 0.3rem;
          color: #222;
        }

        .designation {
          color: #007B55;
          font-weight: bold;
          margin-bottom: 0.8rem;
        }

        .description {
          color: #555;
          font-size: 1rem;
          line-height: 1.5;
        }

        @media (max-width: 1024px) {
          .leadership-row {
            flex-direction: column;
            align-items: center;
          }

          .leader-section {
            width: 90%;
            max-width: 700px;
          }

          .leader-card {
            flex-direction: column;
            text-align: center;
          }

          .leader-image {
            margin: 0 0 1.5rem 0;
          }
        }
      `}</style>
    </>
  );
};

export default ChairmanPrincipal;
