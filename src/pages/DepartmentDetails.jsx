import React, { useState } from "react";
import { useParams } from "react-router-dom";
import departments from "../data/departments";

const DepartmentDetailPage = () => {
  const { id } = useParams();
  const department = departments.find((d) => d.id === id);
  const [tab, setTab] = useState("about");

  if (!department) {
    return <div style={{ padding: "2rem" }}>Department not found.</div>;
  }

  const { name, image, hod, staff } = department;

  return (
    <div style={{ backgroundColor: "#f0f8f0", minHeight: "100vh" }}>
      {/* Title */}
      <div
        style={{
          backgroundColor: "white",
          padding: "2rem",
          textAlign: "center",
          marginBottom: "2rem",
        }}
      >
        <h2 style={{ fontSize: "2.5rem", color: "#2e7d32", margin: 0 }}>{name}</h2>
      </div>

      {/* About Section */}
      <div className="about-college">
        {/* Left: Image + Tabs */}
        <div className="left">
          <img src={image} alt={name} />
          <div className="vertical-tabs">
            {["about", "vision", "mission", "objectives"].map((key) => (
              <span
                key={key}
                onClick={() => setTab(key)}
                className={`tab-item ${tab === key ? "active" : ""}`}
              >
                {key[0].toUpperCase() + key.slice(1)}
              </span>
            ))}
          </div>
        </div>

        {/* Right: Dynamic Content */}
        <div className="right">
          <h3>{tab[0].toUpperCase() + tab.slice(1)}</h3>
          {Array.isArray(department[tab])
            ? department[tab].map((para, i) => <p key={i}>{para}</p>)
            : <p>{department[tab]}</p>}
        </div>
      </div>

      {/* Head of Department Section */}
      {hod && (
        <div style={{ marginTop: "4rem" }}>
          <div
            style={{
              backgroundColor: "white",
              padding: "1rem 0",
              margin: "0 -2rem",
              textAlign: "center",
              marginBottom: "2rem",
            }}
          >
            <h2 style={{ fontSize: "2rem", color: "#2e7d32", margin: 0 }}>
              Head of the Department
            </h2>
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "2rem",
              justifyContent: "center",
              padding: "0 1rem",
            }}
          >
            {/* HOD Bio */}
            <div style={{ flex: 2.5, minWidth: "300px", lineHeight: "1.6", marginLeft: "1cm" }}>
              <h2 style={{ color: "green", marginBottom: "1.5rem" }}>About</h2>
              <h3 style={{ color: "green" }}>Personal Profile</h3>
              <p>{hod.profile.description}</p>

              <h3 style={{ color: "green", marginTop: "1rem" }}>Academic Background</h3>
              <ul style={{ paddingLeft: "1.2rem" }}>
                {hod.profile.academicBackground.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              <h3 style={{ color: "green", marginTop: "1rem" }}>Professional Experience</h3>
              <ul style={{ paddingLeft: "1.2rem" }}>
                {hod.profile.experience.map((exp, i) => (
                  <li key={i}>
                    <strong>{exp.title}</strong><br />
                    {exp.period}<br />
                    {exp.description}
                  </li>
                ))}
              </ul>
            </div>

            {/* HOD Photo */}
            <div
              style={{
                flex: 1.5,
                minWidth: "260px",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img
                src={hod.photo}
                alt={hod.name}
                style={{
                  width: "260px",
                  height: "260px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
                }}
              />
              <h3 style={{ marginTop: "1rem", fontSize: "1.6rem", fontWeight: "bold" }}>{hod.name}</h3>
              <p style={{ fontStyle: "italic", color: "#555" }}>{hod.designation}</p>
              <p
                style={{
                  marginTop: "1rem",
                  color: "green",
                  fontWeight: "bold",
                  fontSize: "1rem",
                  maxWidth: "280px",
                  lineHeight: "1.6",
                }}
              >
                {hod.profile.summary}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Faculty Members Table */}
      {staff && staff.length > 0 && (
        <div style={{ marginTop: "4rem" }}>
          <div
            style={{
              backgroundColor: "white",
              padding: "1rem 0",
              margin: "0 -2rem",
              textAlign: "center",
            }}
          >
            <h2 style={{ fontSize: "2rem", color: "#2e7d32", margin: 0 }}>Faculty Members</h2>
          </div>

          <div style={{ backgroundColor: "white", margin: "2rem 0" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                borderRadius: "5px 5px 0 0",
                overflow: "hidden",
              }}
            >
              <thead>
                <tr style={{ backgroundColor: "#c8e6c9", textAlign: "left" }}>
                  <th style={{ padding: "12px" }}>S.No</th>
                  <th style={{ padding: "12px" }}>Name</th>
                  <th style={{ padding: "12px" }}>Position</th>
                  <th style={{ padding: "12px" }}>Joining Year</th>
                </tr>
              </thead>
              <tbody>
                {staff.map((member, idx) => (
                  <tr key={idx} style={{ borderBottom: "1px solid #ddd" }}>
                    <td style={{ padding: "12px" }}>{idx + 1}</td>
                    <td style={{ padding: "12px" }}>{member.name}</td>
                    <td style={{ padding: "12px" }}>{member.position}</td>
                    <td style={{ padding: "12px" }}>{member.joiningYear}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Scoped CSS */}
      <style>{`
        .about-college {
          display: flex;
          flex-wrap: wrap;
          gap: 3rem;
          align-items: flex-start;
          padding: 0 2rem;
        }

        .about-college .left {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .about-college .left img {
          width: 320px;
          height: 320px;
          object-fit: cover;
          border-radius: 50%;
          box-shadow: 0 12px 20px rgba(0, 0, 0, 0.2);
          margin-top: 1.5rem;
        }

        .vertical-tabs {
          margin-top: 2rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .tab-item {
          font-size: 1rem;
          color: #2e7d32;
          cursor: pointer;
          font-weight: 500;
          text-align: center;
        }

        .tab-item.active {
          font-weight: 700;
          text-decoration: underline;
        }

        .about-college .right {
          flex: 2;
          min-width: 300px;
        }

        .about-college .right h3 {
          font-size: 1.6rem;
          color: #2e7d32;
          margin-bottom: 1rem;
        }

        .about-college .right p {
          font-size: 1.1rem;
          line-height: 1.6;
          color: #333;
          margin-bottom: 1rem;
        }

        @media (max-width: 768px) {
          .about-college {
            flex-direction: column;
            align-items: center;
          }

          .about-college .right {
            text-align: center;
          }

          .vertical-tabs {
            flex-direction: row;
            gap: 1rem;
            justify-content: center;
            flex-wrap: wrap;
          }

          .tab-item {
            font-size: 0.95rem;
          }
        }
      `}</style>
    </div>
  );
};

export default DepartmentDetailPage;
