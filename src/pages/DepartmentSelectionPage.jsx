import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const departments = [
  "Agricultural Engineering",
  "Artificial Intelligence and Data Science",
  "Artificial Intelligence and Machine Learning",
  "Biomedical Engineering",
  "Biotechnology",
  "Civil Engineering",
  "Computer Science and Engineering",
  "Computer Science and Engineering (Cyber Security)",
  "Electrical and Electronics Engineering",
  "Electronics and Communication Engineering",
  "Food Technology",
  "Information Technology",
  "Mechanical Engineering",
  "Electronics Engineering (VLSI Design & Technology)"
];

const DepartmentSelectionPage = () => {
  const navigate = useNavigate();
  const batch = localStorage.getItem("selectedBatch") || "Not Selected";

  const handleDepartmentClick = (deptName) => {
    navigate("/student-list", {
      state: { batch, department: deptName }
    });
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.header}>
        <h2 style={styles.title}>🎓 Batch: {batch}</h2>
        <p style={styles.subtitle}>📘 Select your Department</p>
      </div>

      <div className="dept-grid" style={styles.grid}>
        {departments.map((dept, index) => (
          <motion.div
            key={index}
            className="dept-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.02 }}
            onClick={() => handleDepartmentClick(dept)}
          >
            {dept}
          </motion.div>
        ))}
      </div>

      <style>{`
        .dept-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 2.2rem;
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 1rem;
        }

        .dept-card {
          background: #ffffff;
          padding: 2.8rem;
          border-radius: 14px;
          text-align: center;
          font-size: 1.1rem;
          font-weight: 600;
          color: #2e7d32;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
          cursor: pointer;
          transition: all 0.3s ease-in-out;
          min-height: 100px;
          display: flex;
          justify-content: center;
          align-items: center;
          user-select: none;
        }

        .dept-card:hover {
          background-color: #e8f9e8;
          box-shadow: 0 12px 24px rgba(34, 139, 34, 0.15);
        }

        @media (max-width: 768px) {
          .dept-card {
            font-size: 1rem;
            padding: 2rem;
            min-height: 90px;
          }

          .dept-grid {
            gap: 1.8rem;
          }
        }

        @media (max-width: 480px) {
          .dept-card {
            font-size: 0.95rem;
            padding: 1.6rem;
            min-height: 80px;
          }

          .dept-grid {
            gap: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};

const styles = {
  wrapper: {
    backgroundColor: "#f0f8f0",
    minHeight: "100vh",
    padding: "1rem 1rem",
    fontFamily: "'Poppins', sans-serif",
    textAlign: "center",
    position: "relative",
    overflow: "hidden",
  },
  header: {
    marginBottom: "2.5rem",
  },
  title: {
    fontSize: "2.5rem",
    color: "#2e7d32",
    fontWeight: 700,
    marginBottom: "0.3rem",
  },
  subtitle: {
    fontSize: "1rem",
    color: "#555",
  },
  grid: {
    zIndex: 1,
  },
};

export default DepartmentSelectionPage;