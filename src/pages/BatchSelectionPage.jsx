import React from "react";
import { useNavigate } from "react-router-dom";
import { FaGraduationCap } from "react-icons/fa";
import Particles from "react-tsparticles";

const BatchSelectionPage = () => {
  const navigate = useNavigate();
  const batches = [
    { label: "2018–2022", status: "Completed" },
     {label: "2019–2023", status: "Completed" },
    { label: "2020–2024", status: "Ongoing" },
    { label: "2021–2025", status: "Ongoing" },
    { label: "2022–2026", status: "Upcoming" },
    { label: "2023–2027", status: "Upcoming" },
    { label: "2024–2028", status: "Upcoming" },
    { label: "2025–2029", status: "Upcoming" }
  ];

  const handleSelect = (batch) => {
    localStorage.setItem("selectedBatch", batch.label);
    navigate("/select-department", { state: { batch: batch.label } });
  };

  return (
    <div style={styles.wrapper}>
      {/* Optional Background */}
      <Particles
        id="tsparticles"
        options={{
          fullScreen: { enable: false },
          background: { color: "#f9faf9" },
          fpsLimit: 60,
          particles: {
            color: { value: "#2e7d32" },
            links: {
              enable: true,
              color: "#a5d6a7",
              distance: 120,
              opacity: 0.3,
              width: 1,
            },
            move: { enable: true, speed: 1 },
            number: { value: 30 },
            opacity: { value: 0.3 },
            size: { value: { min: 1, max: 4 } },
          },
        }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 0,
          width: "100%",
          height: "100%",
        }}
      />

      <div style={styles.content}>
        <h2 style={styles.title}>🎓 Select Your Batch</h2>
        <p style={styles.subtitle}>Choose your graduation year to continue</p>

        <div style={styles.grid}>
          {batches.map((b, i) => (
            <div
              key={i}
              style={styles.card}
              className="batch-card"
              onClick={() => handleSelect(b)}
            >
              
              <div style={styles.label}>{b.label}</div>
              <div style={styles.status}>{b.status}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Hover Effect */}
      <style>{`
        .batch-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
        }
      `}</style>
    </div>
  );
};

const styles = {
  wrapper: {
    background: "#f9faf9",
    minHeight: "100vh",
    position: "relative",
    padding: "3rem 1rem",
    fontFamily: "'Poppins', sans-serif",
  },
  content: {
    position: "relative",
    zIndex: 1,
    textAlign: "center",
    maxWidth: "1100px",
    margin: "0 auto",
  },
  title: {
    fontSize: "2.8rem",
    color: "#2e7d32",
    marginBottom: "0.3rem",
    fontWeight: "600",
  },
  subtitle: {
    fontSize: "1.1rem",
    color: "#555",
    marginBottom: "2.5rem",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "2rem",
    padding: "0 1rem",
  },
  card: {
    background: "#fff",
    borderRadius: "14px",
    padding: "2.8rem",
    boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
    cursor: "pointer",
    transition: "all 0.3s ease",
    textAlign: "center",
    userSelect: "none",
  },
  icon: {
    fontSize: "2.2rem",
    color: "#2e7d32",
    marginBottom: "0.75rem",
  },
  label: {
    fontSize: "1.3rem",
    fontWeight: "600",
    color: "#333",
  },
  status: {
    fontSize: "0.95rem",
    color: "#777",
    marginTop: "0.4rem",
  },
};

export default BatchSelectionPage;