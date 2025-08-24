import React from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
import { FiDownload } from "react-icons/fi";
import allStudents from "../data/studentData"; // Must be an array of student objects

const StudentProfileDetail = () => {
  const { regNo } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const student = allStudents.find((s) => s.personalDetails.regNo === regNo);

  if (!student) return <div>Student not found</div>;

  const {
    personalDetails,
    academicDetails,
    sgpaList,
    overallCgpa,
    skills,
    certifications,
    project,
    publication,
    resume,
    placementPortal,
    linkedin,
    contact
  } = student;


  return (
    <>
      <div className="student-navbar">
        <div className="navbar-left">
          🎓 <span className="profile-title">Student Profile</span>
        </div>
        <div className="navbar-right">
          <Link activeClass="active" to="personal" spy smooth duration={500}>Personal</Link>
          <Link activeClass="active" to="academic" spy smooth duration={500}>Academic</Link>
          <Link activeClass="active" to="cgpa" spy smooth duration={500}>CGPA</Link>
          <Link activeClass="active" to="skills" spy smooth duration={500}>Skills</Link>
          <Link activeClass="active" to="certifications" spy smooth duration={500}>Certifications</Link>
          <Link activeClass="active" to="projects" spy smooth duration={500}>Projects</Link>
          <Link activeClass="active" to="publications" spy smooth duration={500}>Publications</Link>
          <Link activeClass="active" to="resume" spy smooth duration={500}>Resume</Link>
          <Link activeClass="active" to="placement" spy smooth duration={500}>Placement</Link>
          <Link activeClass="active" to="linkedin" spy smooth duration={500}>LinkedIn</Link>
          <Link activeClass="active" to="contact" spy smooth duration={500}>Contact</Link>
        </div>
      </div>

      <div className="student-profile-container">
        {/* Personal Details */}
        <div id="personal" className="profile-section personal-section">
          <div className="personal-title">Personal Details</div>
          <div className="personal-details">
            <div className="details-text">
              <p><strong>Reg No:</strong> {personalDetails.regNo}</p>
              <p><strong>Name:</strong> {personalDetails.name}</p>
              <p><strong>Date of Birth:</strong> {personalDetails.dob}</p>
              <p><strong>Department:</strong> {personalDetails.department}</p>
              <p><strong>Blood Group:</strong> {personalDetails.bloodGroup}</p>
              <p><strong>Address:</strong> {personalDetails.address}</p>
              <p><strong>Academic Year:</strong> {personalDetails.academicYear}</p>
              <p><strong>Year of Passing:</strong> {personalDetails.yearOfPassing}</p>
            </div>
            <div className="details-photo">
              <img src={personalDetails.photo} alt="Student" />
            </div>
          </div>
        </div>

        <hr className="section-divider" />

        {/* Academic Details */}
        <div id="academic" className="profile-section academic-section">
          <div className="academic-title">Academic Details</div>
          <div className="academic-details">
            <div className="academic-block">
              <p><strong>SSLC:</strong></p>
              <p><strong>Board:</strong> {academicDetails.sslc.board}</p>
              <p><strong>Institution:</strong> {academicDetails.sslc.institution}</p>
              <p><strong>Year of Passing:</strong> {academicDetails.sslc.year}</p>
              <p><strong>Percentage:</strong> {academicDetails.sslc.percentage}</p>
            </div>

            <div className="academic-block">
              <p><strong>HSC:</strong></p>
              <p><strong>Board:</strong> {academicDetails.hsc.board}</p>
              <p><strong>Institution:</strong> {academicDetails.hsc.institution}</p>
              <p><strong>Year of Passing:</strong> {academicDetails.hsc.year}</p>
              <p><strong>Percentage:</strong> {academicDetails.hsc.percentage}</p>
            </div>

            <div className="academic-block">
              <p><strong>UG:</strong></p>
              <p><strong>Department:</strong> {academicDetails.ug.department}</p>
              <p><strong>Institution:</strong> {academicDetails.ug.institution}</p>
              <p><strong>Year of Passing:</strong> {academicDetails.ug.year}</p>
              <p><strong>CGPA:</strong> {academicDetails.ug.cgpa}</p>
            </div>
          </div>
        </div>

        <hr className="section-divider" />

      {/* CGPA */}
       <div id="cgpa" className="profile-section cgpa-section">
          <h2 className="cgpa-heading">CGPA</h2>
          <h3 className="sgpa-subheading">SGPA - Semester-wise</h3>

          <div className="cgpa-wrapper">
            {/* SGPA List */}
            <div className="sgpa-list">
              <ul>
                {sgpaList.map((sgpa, i) => (
                <li key={i}>Semester {i + 1}: {sgpa}</li>
              ))}
              </ul>
            </div>

            {/* Overall CGPA Box */}
            <div className="cgpa-box">
              <p>Overall CGPA</p>
              <h2>{overallCgpa}</h2>
            </div>
          </div>
        </div>

        <hr className="section-divider" />

        {/* Skills */}
        <div id="skills" className="profile-section skills-section">
          <div className="skills-title">Skills</div>
          <div className="skills-container">
            {skills.map((skill, i) => <div key={i} className="skill-card">{skill}</div>)}
          </div>
        </div>

        <hr className="section-divider" />

        {/* Certifications */}
        <div id="certifications" className="profile-section certifications-section">
          <div className="certifications-title">Certifications</div>
          <div className="certification-cards">
            {certifications.map((cert, idx) => (
              <div className="cert-card" key={idx}>
                <div className="cert-course">{cert.course}</div>
                <div className="cert-domain">{cert.domain}</div>
                <div className="cert-date">Certified: {cert.date}</div>
                <a href={cert.file} download className="download-icon" title="Download Certificate">
                  <FiDownload size={20} />
                </a>
              </div>
            ))}
          </div>
        </div>

        <hr className="section-divider" />

        {/* Projects */}
        <div id="projects" className="profile-section projects-section">
          <div className="projects-title">Projects</div>
          <div className="project-cards">
            <div className="project-card">
              <div className="project-title">{project.title}</div>
              <div className="project-domain">Domain: {project.domain}</div>
              <div className="project-languages">Languages: {project.languages}</div>
              <span className="view-link" onClick={() => navigate(`/projects/${encodeURIComponent(project.title)}`, { state: project })}>View</span>
            </div>
          </div>
        </div>

        <hr className="section-divider" />

        {/* Publications */}
        <div id="publications" className="profile-section publications-section">
          <div className="publications-title">Publications</div>
          <div className="publication-cards">
            <div className="publication-card">
              <div className="publication-title">{publication.title}</div>
              <div className="publication-journal">Journal: {publication.journal}</div>
              <div className="publication-authors">Authors: {publication.authors}</div>
              <div className="publication-date">Published: {publication.date}</div>
              <span className="view-link" onClick={() => navigate(`/publications/${encodeURIComponent(publication.title)}`, { state: publication })}>View</span>
            </div>
          </div>
        </div>

        <hr className="section-divider" />

        {/* Resume */}
        <div id="resume" className="profile-section resume-section">
          <div className="resume-title">Resume</div>
          <div className="resume-card">
            <div className="resume-name">{resume.name}</div>
            <a href={resume.file} download className="download-icon" title="Download Resume">
              <FiDownload size={20} />
            </a>
          </div>
        </div>

        <hr className="section-divider" />

        {/* Placement Portal */}
        <div id="placement" className="profile-section placement-section">
          <div className="placement-title">Placement Status</div>
          <div className="placement-details">
            <p><strong>{placementPortal.label}:</strong></p>
            <a href={placementPortal.url} target="_blank" rel="noopener noreferrer">
              {placementPortal.url}
            </a>
          </div>
        </div>

        <hr className="section-divider" />

        {/* LinkedIn */}
        <div className="profile-section linkedin-section">
          <div className="linkedin-title">LinkedIn Profile</div>
          <div className="linkedin-link">
            <a href={linkedin} target="_blank" rel="noopener noreferrer">
              {linkedin}
            </a>
          </div>
        </div>

        <hr className="section-divider" />

        {/* Contact Info */}
        <div id="contact" className="profile-section contact-section">
          <div className="contact-title">Contact Information</div>
          <div className="contact-details">
            <p><strong>Email:</strong> {contact.email}</p>
            <p><strong>Phone:</strong> {contact.phone}</p>
          </div>
        </div>

        <hr className="section-divider" />
      </div>
    
      <style>{`
        body {
            margin: 0;
            font-family: "Segoe UI", sans-serif;
        }

        .section-divider {
            border: none;
            border-top: 1px solid green;
            margin-top: 0.5cm;
            margin-bottom: 0.5cm;
            width: 95%;
        }

        .student-navbar {
            position: sticky;
            top: 0;
            z-index: 999;
            background-color: green;
            color: white;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1.2rem 2rem;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .profile-title {
            font-size: 1.6rem;
            font-weight: bold;
        }

        .navbar-right a {
            color: white;
            margin-left: 1rem;
            cursor: pointer;
            font-size: 1rem;
            text-decoration: none;
            padding-bottom: 3px;
        }

        .navbar-right a.active {
            color: #c1f0c1;
            border-bottom: 2px solid #c1f0c1;
        }

        .navbar-right a:hover {
            text-decoration: underline;
        }

        .student-profile-container {
            background-color: #f0f8f0;
            padding-bottom: 5rem;
        }

        .profile-section {
            padding: 1.5rem 2rem;
        }

        .personal-section {
            background: transparent;
            padding-left: 3cm;
            padding-right: 3cm;
            padding-top: 1.5cm;
        }

        .personal-section,
        .academic-section,
        .cgpa-section,
        .skills-section,
        .certifications-section {
            background: transparent;
            padding-left: 3cm;
            padding-right: 3cm;
            padding-top: 0.5cm;
        }

        .personal-title,
        .academic-title,
        .cgpa-title,
        .skills-title,
        .certifications-title {
            font-size: 1.8rem;
            font-weight: bold;
            color: green;
            margin-bottom: 1.0rem;//
            text-align: left;
        }

        .personal-details {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
        }

        .details-text {
            flex: 1;
            font-size: 1.2rem;
            color: #333;
            line-height: 2.2rem;
            margin-top: -1rem;
        }

        .details-photo {
            margin-right: 3cm;
        }

        .details-photo img {
            width: 300px;
            height: 300px;
            border-radius: 50%;
            object-fit: cover;
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
        }

        .academic-details {
            display: flex;
            flex-direction: column;
        }

        .academic-block {
            font-size: 1.2rem;
            color: #333;
            line-height: 2.2rem;
            margin-left: 5rem;
        }

        .academic-block p:first-child {
            font-size: 1.3rem;
            color: #006400;
            font-weight: bold;
            margin-bottom: 0.3rem;
            margin-left: -5rem;
        }

        .cgpa-section {
          background-color: #f0f8f0;
          padding: 2rem 3cm; /* 3cm left & right padding */
        }

        .cgpa-heading {
          font-size: 2rem;
          color: green;
          font-weight: bold;
          margin-bottom: 0.5rem;
        }

        .sgpa-subheading {
          font-size: 1.3rem;
          color: #006400;
          margin-bottom: 1rem;
          margin-left:0.3rem;
        }

        .cgpa-wrapper {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 2rem;
          margin-top: 1.5rem;
          margin-left:2.5rem;
        }

        .sgpa-list ul {
          list-style: disc;
          padding-left: 1.5rem;
          color: #333;
          font-size: 1.2rem;
          margin: 0;
        }

        .sgpa-list li {
          line-height: 0.7cm; /* 1 cm vertical spacing */
          margin-bottom: 0.5rem; /* fallback spacing for browser inconsistency */
        }

        /* Overall CGPA box */
        .cgpa-box {
          background-color: #d1e2d1ff;
          padding: 1rem 1.5rem;
          border-radius: 10px;
          text-align: center;
          min-width: 140px;
          max-height: 100px;
          align-self: center;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
          margin-right:10rem;
          margin-bottom:9rem;
        }

        .cgpa-box p {
          font-size: 1rem;
          color: #006400;
          margin-bottom: 0.3rem;
        }

        .cgpa-box h2 {
          font-size: 2rem;
          color: #1b5e20;
          margin: 0;
        }

        .skills-container {
            display: flex;
            flex-wrap: wrap;
            gap: 1.5rem;
            margin-top: 3rem;
        }

        .skill-card {
            background-color: #ffffff;
            padding: 1.4rem 3rem;
            border-radius: 10px;
            font-size: 1.2rem;
            font-weight: 500;
            color: #333;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
        }

        .certification-cards {
            display: flex;
            flex-wrap: wrap;
            gap: 1.5rem;
        }

        .cert-card {
            background-color: #ffffff;
            padding: 1.2rem;
            border-radius: 12px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
            width: 260px;
            min-height: 160px;
            position: relative;
            display: flex;
            flex-direction: column;
            gap: 0.5cm;
        }

        .cert-course {
            font-size: 1.1rem;
            font-weight: bold;
            color: #333;
        }

        .cert-domain {
            font-size: 1rem;
            color: #666;
        }

        .cert-date {
            font-size: 0.9rem;
            color: green;
        }

        .download-icon {
            position: absolute;
            right: 1rem;
            bottom: 1rem;
            color: green;
            text-decoration: none;
            opacity: 1;
            transition: opacity 0.5s ease;
        }

        .download-icon:active {
            opacity: 0.3;
        }

        /* Section: Projects, Publications, Resume (shared layout) */
        .projects-section,
        .publications-section,
        .resume-section {
          background: transparent;
          padding-left: 3cm;
          padding-right: 3cm;
          padding-top: 0.5cm;
        }

        /* Section Titles */
        .certifications-title,
        .projects-title,
        .publications-title,
        .resume-title {
          font-size: 1.8rem;
          font-weight: bold;
          color: green;
          margin-bottom: 1.0cm;
          text-align: left;
        }

        /* Cards Layout */
        .project-cards,
        .publication-cards {
          display: flex;
          flex-wrap: wrap;
          gap: 1.5rem;
        }

        /* Project & Publication Card Style */
        .project-card,
        .publication-card {
          background-color: #ffffff;
          padding: 1.2rem;
          border-radius: 12px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          width: 260px;
          min-height: 160px;
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 0.5cm;
          font-size: 1rem;
          color: #333;
        }

        /* Resume Card */
        .resume-card {
          background-color: #ffffff;
          padding: 1.4rem 2rem;
          border-radius: 10px;
          font-size: 1.1rem;
          font-weight: 500;
          color: green;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
          width: 260px;
          min-height: 90px;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        /* Resume Name Text */
        .resume-name {
          font-weight: bold;
          font-size: 1.1rem;
          color: green;
        }

        /* Resume Download Icon */
        .resume-card .download-icon {
          position: absolute;
          right: 1rem;
          bottom: 1rem;
          color: green;
          text-decoration: none;
          opacity: 1;
          transition: opacity 0.5s ease;
        }

        .resume-card .download-icon:active {
          opacity: 0.3;
        }


        /* Common Text Styles */
        .project-title,
        .publication-title {
          font-weight: bold;
          font-size: 1.1rem;
        }

        .project-domain,
        .project-languages,
        .publication-journal,
        .publication-authors,
        .publication-date {
          color: #666;
          font-size: 0.95rem;
        }

        /* Project View Link - lifted slightly */
        .project-card .view-link {
          color: green;
          cursor: pointer;
          text-decoration: underline;
          font-size: 0.95rem;
          margin-top: 0.3rem;
          position: relative;
          align-self: flex-start;
        }

        /* Publication View Link - aligned to bottom */
        .publication-card .view-link {
          color: green;
          cursor: pointer;
          text-decoration: underline;
          font-size: 0.95rem;
          position: absolute;
          bottom: 0.7rem;
          left: 1rem;
        }

        /* Placement Portal Section */
        .placement-section {
          background: transparent;
          padding-left: 3cm;
          padding-right: 3cm;
          padding-top: 0.5cm;
        }

        .placement-title {
          font-size: 1.8rem;
          font-weight: bold;
          color: green;
          margin-bottom: 1rem;
          text-align: left;
        }

        .portal-link {
          font-size: 1.1rem;
          color: #006400;
          text-decoration: underline;
          cursor: pointer;
        }

        /* LinkedIn Section */
        .linkedin-section {
          background: transparent;
          padding-left: 3cm;
          padding-right: 3cm;
          padding-top: 0.5cm;
        }

        .linkedin-title {
          font-size: 1.8rem;
          font-weight: bold;
          color: green;
          margin-bottom: 1rem;
          text-align: left;
        }

        .linkedin-link {
          font-size: 1.1rem;
          color: #0077b5;
          text-decoration: underline;
          cursor: pointer;
        }

        /* Contact Section */
        .contact-section {
          background: transparent;
          padding-left: 3cm;
          padding-right: 3cm;
          padding-top: 0.5cm;
        }

        .contact-title {
          font-size: 1.8rem;
          font-weight: bold;
          color: green;
          margin-bottom: 1rem;
          text-align: left;
        }

        .contact-details {
          font-size: 1.2rem;
          color: #333;
          line-height: 2.2rem;
        }

        /* ============================= */
        /* Responsive: Max-width 768px  */
        /* ============================= */
        @media (max-width: 768px) {
          .personal-details {
            flex-direction: column;
            align-items: center;
          }

          .details-text {
            text-align: center;
            margin-top: 1rem;
          }

          .details-photo {
            margin-right: 0;
            margin-top: 2rem;
          }

          .navbar-right {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
            justify-content: flex-end;
          }

          /* Responsive padding adjustments for all sections */
          .academic-section,
          .cgpa-section,
          .skills-section,
          .certifications-section,
          .projects-section,
          .publications-section,
          .resume-section,
          .placement-section,
          .linkedin-section,
          .contact-section {
            padding-left: 1rem;
            padding-right: 1rem;
          }

          /* Center-align all titles */
          .academic-title,
          .cgpa-title,
          .skills-title,
          .certifications-title,
          .projects-title,
          .publications-title,
          .resume-title,
          .placement-title,
          .linkedin-title,
          .contact-title {
            text-align: center;
          }

          /* Skills layout adjustment */
          .skills-container {
            justify-content: center;
            gap: 1rem;
          }

          .skill-card {
            padding: 1rem 2rem;
            font-size: 1rem;
          }

          /* Card containers center alignment */
          .certification-cards,
          .project-cards,
          .publication-cards {
            justify-content: center;
          }

          /* Card width reduction for smaller screens */
          .cert-card,
          .project-card,
          .publication-card {
            width: 90%;
          }

          /* Resume card responsiveness */
          .resume-card {
            width: 90%;
            margin: auto;
          }
        }

      `}</style>
    </>
  );
};

export default StudentProfileDetail;