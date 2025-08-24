import React from 'react';
import { useNavigate } from 'react-router-dom'; // For routing

const PlacementSection = () => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate("/placement-batch");
  };

  return (
    <>
      <div className="placement-wrapper">
        {/* Title */}
        <h2 className="placement-title">SIET Placements</h2>

        <div className="placement-section">
          {/* Text Left */}
          <div className="placement-info">
            <p>
              Our dedicated placement cell at SIET has consistently delivered outstanding placement results.
              We equip our students with the necessary skills and training to excel in competitive hiring processes.
              With mock interviews, resume-building workshops, and industry collaborations, we bridge the gap
              between academics and careers.
            </p>

            <div className="stat-row">
              <div className="stat-card">
                <div className="stat-number">95%</div>
                <div className="stat-label">Placement Rate</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">100+</div>
                <div className="stat-label">Companies Visited</div>
              </div>
            </div>

            {/* ✅ Box-style button */}
            <div className="placement-box-btn" onClick={handleViewDetails}>
              View Placement Details →
            </div>
          </div>

          {/* Image Right */}
          <div className="placement-image">
            <img src="/images/placement.jpg" alt="Placement" />
          </div>
        </div>
      </div>

      {/* CSS Styles */}
      <style>{`
        .placement-wrapper {
          width: 100%;
          background-color: #f0f8f0;
          padding: 0;
          margin-top: -20px;
        }

        .placement-title {
          text-align: center;
          color: green;
          font-size: 2.4rem;
          padding: 2rem 0;
          background-color: white;
        }

        .placement-section {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          column-gap: 2.5cm;
        }

        .placement-info {
          flex: 1;
          max-width: calc(100% - 270px - 2cm);
          margin-left: 2cm;
        }

        .placement-info p {
          color: #444;
          font-size: 1.2rem;
          line-height: 1.8;
          margin-bottom: 1.5rem;
        }

        .stat-row {
          display: flex;
          gap: 1.5rem;
          flex-wrap: wrap;
          margin-bottom: 1.5rem;
        }

        .stat-card {
          background: #fff;
          padding: 1.5rem 2rem;
          border-radius: 12px;
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
          text-align: center;
          min-width: 160px;
          flex: 1;
          max-width: 220px;
        }

        .stat-number {
          font-size: 2rem;
          font-weight: bold;
          color: #2e7d32;
        }

        .stat-label {
          margin-top: 0.5rem;
          font-size: 0.95rem;
          color: #555;
        }

        /* ✅ Box-style button */
        .placement-box-btn {
          display: inline-block;
          padding: 1rem 1.5rem;
          border: 2px solid #228b22;
          background-color: #ffffff;
          border-radius: 10px;
          color: #228b22;
          font-weight: bold;
          font-size: 1.1rem;
          cursor: pointer;
          transition: background-color 0.3s ease;
          margin-top: 1rem;
          text-align: center;
        }

        .placement-box-btn:hover {
          background-color: #eaf8ea;
        }

        .placement-image img {
          width: 300px;
          height: 300px;
          object-fit: cover;
          border-radius: 50%;
          margin-right: 2cm;

          /* ✅ Green highlight glow */
          box-shadow: 0 0 25px rgba(0, 128, 0, 0.35);
          transition: box-shadow 0.3s ease-in-out;
        }

        .placement-image img:hover {
          box-shadow: 0 0 35px rgba(0, 128, 0, 0.55);
        }

        @media (max-width: 768px) {
          .placement-section {
            flex-direction: column-reverse;
            gap: 2rem;
          }

          .placement-info {
            margin: 0;
            max-width: 100%;
            text-align: center;
          }

          .placement-image img {
            margin: 0 auto;
          }

          .stat-row {
            justify-content: center;
          }
        }
      `}</style>
    </>
  );
};

export default PlacementSection;
