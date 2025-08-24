import React from 'react';

const Toppers = () => {
  return (
    <>
      <div className="toppers">
        <h3>Our Toppers</h3>
        <div className="topper-cards">
          {/* Map over toppers later */}
          <div className="card">
            <img src="/images/topper1.jpg" alt="Topper" />
            <p>Student Name</p>
          </div>
        </div>
      </div>
      <style>{`
        .toppers {
          text-align: center;
          padding: 2rem;
          background-color: #f5f5f5;
        }
        .toppers h3 {
          margin-bottom: 1.5rem;
          color: #333;
        }
        .topper-cards {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          flex-wrap: wrap;
        }
        .card {
          background: white;
          padding: 1rem;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          max-width: 150px;
        }
        .card img {
          width: 100%;
          border-radius: 50%;
          margin-bottom: 0.5rem;
        }
        .card p {
          margin: 0;
          font-weight: 500;
        }
      `}</style>
    </>
  );
};

export default Toppers;
