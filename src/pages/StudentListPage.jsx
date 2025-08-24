import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const StudentListPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const batch = location.state?.batch || localStorage.getItem("selectedBatch") || "Unknown";
  const department = location.state?.department || "Unknown";

  const students = [
    { regNo: "714023104001", name: "Dhinakaran C" },
    { regNo: "714023104002", name: "Harini M" },
    { regNo: "714023104003", name: "Ajay K" },
    { regNo: "714023104004", name: "Akileshwaran B" },
    { regNo: "714023104005", name: "Akshatha P" },
    { regNo: "714023104006", name: "Anandhi A" },
    { regNo: "714023104007", name: "Ananthu AS" },
    { regNo: "714023104008", name: "Anirudh T" },
    { regNo: "714023104009", name: "Anunithi K" },
    { regNo: "714023104010", name: "Arulraaj J" },
    { regNo: "714023104011", name: "Arun A" },
    { regNo: "714023104012", name: "Arun Praveen A" },
    { regNo: "714023104013", name: "Adharsh V" },
    { regNo: "714023104014", name: "Bharath K" },
    { regNo: "714023104015", name: "Bhoomash AK" },
  ];

 const handleClick = (regNo) => {
  const student = students.find((s) => s.regNo === regNo);
  navigate(`/student-profile/${regNo}`, { state: student });
};

  return (
    <div className="student-list-page">
      <div className="top-info">
        <button className="back-btn" onClick={() => navigate("/select-department")}>
          ← Back
        </button>
        <h2 className="list-heading">Student Register Numbers</h2>
        <p className="context-info">🎓 Batch: {batch} | 📘 Department: {department}</p>
      </div>

      <div className="list-container">
        {students.map((student, index) => (
          <div
            className="list-card"
            key={index}
            onClick={() => handleClick(student.regNo)}
          >
            {student.regNo} - {student.name}
          </div>
        ))}
      </div>

      <style>{`
        .student-list-page {
          padding: 2rem 1rem;
          background-color: #f4fcf4;
          min-height: 100vh;
          font-family: 'Segoe UI', sans-serif;
        }

        .top-info {
          text-align: center;
          margin-bottom: 1.5rem;
        }

        .list-heading {
          font-size: 1.8rem;
          font-weight: 600;
          color: #2e7d32;
          margin-bottom: 0.5rem;
        }

        .context-info {
          font-size: 1rem;
          color: #444;
        }

        .back-btn {
          background: none;
          border: none;
          color: #2e7d32;
          font-size: 1rem;
          cursor: pointer;
          position: absolute;
          left: 1rem;
          top: 1.5rem;
        }

        .list-container {
          max-width: 960px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .list-card {
          background-color: #ffffff;
          border-radius: 8px;
          padding: 1rem 1.2rem;
          font-size: 1.05rem;
          color: #2e7d32;
          box-shadow: 0 4px 6px rgba(0, 128, 0, 0.06);
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .list-card:hover {
          background-color: #e8f5e9;
          transform: translateY(-2px);
        }

        @media (max-width: 600px) {
          .list-card {
            font-size: 0.95rem;
            padding: 0.8rem 1rem;
          }

          .back-btn {
            font-size: 0.9rem;
            top: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default StudentListPage;