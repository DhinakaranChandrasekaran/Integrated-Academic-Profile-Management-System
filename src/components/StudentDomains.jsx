import React from 'react';

const StudentDomains = () => {
  return (
    <>
      <div className="student-domains">
        <div className="left">
          <h3>Student Profiles</h3>
          <p>View profiles of our students.</p>
        </div>
        <div className="right">
          <h3>Domains</h3>
          <p>Explore student expertise areas.</p>
        </div>
      </div>
      <style>{`
        .student-domains {
          display: flex;
          justify-content: space-around;
          align-items: center;
          padding: 2rem;
          background-color: #f9f9f9;
          flex-wrap: wrap;
        }
        .student-domains .left,
        .student-domains .right {
          flex: 1 1 250px;
          background: white;
          margin: 1rem;
          padding: 1.5rem;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          text-align: center;
        }
        .student-domains h3 {
          margin-bottom: 0.75rem;
          color: #333;
        }
        .student-domains p {
          margin: 0;
          color: #555;
        }
      `}</style>
    </>
  );
};

export default StudentDomains;
