import React from 'react';
import { useNavigate } from 'react-router-dom';

const Department = () => {
  const navigate = useNavigate();

  const handleImageClick = () => {
    navigate('/departments');
  };

  return (
    <>
      <div className="dept-wrapper">
        <h2 className="dept-title">About Department</h2>

        <div className="department-section">
          <div className="department-image">
            <img
              src="/images/dept.jpg"
              alt="Department"
              onClick={handleImageClick}
            />
          </div>

          <div className="department-info">
            <p>
              The departments at our institution are designed to provide a strong academic foundation, 
              practical exposure, and research opportunities. Our goal is to empower students with technical 
              skills and leadership qualities essential for solving real-world challenges.
            </p>
            <ul className="dept-list">
              <li><strong>Computer Science and Engineering</strong></li>
              <li><strong>Electronics and Communication Engineering</strong></li>
              <li><strong>Mechanical Engineering</strong></li>
              <li><strong>Electrical and Electronics Engineering</strong></li>
              <li><strong>Bio-Tech Engineering</strong></li>
            </ul>
          </div>
        </div>
      </div>

      <style>{`
        .dept-wrapper {
          width: 100%;
          background-color: #f0f8f0;
          padding: 0;
          margin-top: 20px;
        }

        .dept-title {
          text-align: center;
          color: green;
          font-size: 2.4rem;
          padding: 1rem 0;
          background-color: white;
          margin-top: 20px;
        }

        .department-section {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          column-gap: 2.5cm; /* ✅ Gap between image and text */
        }

        .department-image img {
          width: 300px;
          height: 300px;
          object-fit: cover;
          border-radius: 50%;
          cursor: pointer;
          margin-left: 2cm;
        }

        .department-info {
          flex: 1;
          max-width: calc(100% - 270px - 2]cm); /* ✅ Occupy remaining space */
          margin-right: 1.5cm; /* ✅ Right-side spacing */
        }

        .department-info p {
          color: #444;
          font-size: 1.2rem;
          line-height: 1.8;
          margin-bottom: 1.5rem;
        }

        .dept-list {
          list-style: disc;
          padding-left: 1.2rem;
        }

        .dept-list li {
          margin-bottom: 0.6rem;
          color: #333;
        }

        @media (max-width: 768px) {
          .department-section {
            flex-direction: column;
            gap: 2rem;
          }

          .department-image img {
            margin: 0 auto;
          }

          .department-info {
            margin-right: 0;
            max-width: 100%;
            text-align: center;
          }
        }
      `}</style>
    </>
  );
};

export default Department;
