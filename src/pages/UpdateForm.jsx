import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UpdateForm = () => {
  const navigate = useNavigate();
  const [studentData, setStudentData] = useState({});
  const [formData, setFormData] = useState({});

  useEffect(() => {
    const storedStudent = JSON.parse(localStorage.getItem('loggedInStudent'));
    if (!storedStudent) return navigate('/sign-in');
    setStudentData(storedStudent);
    setFormData({
      sgpa1: '',
      sgpa2: '',
      cgpa: '',
      backlogs: '',
      email: storedStudent.email || '',
      phone: storedStudent.phone || '',
      address: storedStudent.address || '',
      placementStatus: storedStudent.placementStatus || '',
      linkedin: storedStudent.linkedin || '',
      projects: '',
      certifications: '',
      skills: '',
      publications: ''
    });
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Updated Form Data:', formData);
    // Save to backend here
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '800px', margin: 'auto', padding: '2rem' }}>
      <h2>Update Student Profile</h2>

      {/* PERSONAL DETAILS */}
      <fieldset disabled style={fieldsetStyle}>
        <legend>Personal Details</legend>
        <input value={studentData.name || ''} placeholder="Name" style={inputStyle} readOnly />
        <input value={studentData.regNo || ''} placeholder="Registration Number" style={inputStyle} readOnly />
        <input value={studentData.dob || ''} placeholder="Date of Birth" style={inputStyle} readOnly />
      </fieldset>

      {/* ACADEMIC DETAILS */}
      <fieldset style={fieldsetStyle}>
        <legend>Academic Details</legend>
        <input name="sgpa1" value={formData.sgpa1} onChange={handleChange} placeholder="SGPA (Semester 1)" style={inputStyle} />
        <input name="sgpa2" value={formData.sgpa2} onChange={handleChange} placeholder="SGPA (Semester 2)" style={inputStyle} />
        <input name="cgpa" value={formData.cgpa} onChange={handleChange} placeholder="Overall CGPA" style={inputStyle} />
        <input name="backlogs" value={formData.backlogs} onChange={handleChange} placeholder="Backlogs" style={inputStyle} />
      </fieldset>

      {/* CONTACT INFORMATION */}
      <fieldset style={fieldsetStyle}>
        <legend>Contact Information</legend>
        <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" style={inputStyle} />
        <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" style={inputStyle} />
        <input name="address" value={formData.address} onChange={handleChange} placeholder="Address" style={inputStyle} />
      </fieldset>

      {/* PLACEMENT & LINKING */}
      <fieldset style={fieldsetStyle}>
        <legend>Placement & Linking</legend>
        <input name="placementStatus" value={formData.placementStatus} onChange={handleChange} placeholder="Placement Status" style={inputStyle} />
        <input name="linkedin" value={formData.linkedin} onChange={handleChange} placeholder="LinkedIn URL" style={inputStyle} />
      </fieldset>

      {/* PROJECTS */}
      <fieldset style={fieldsetStyle}>
        <legend>Projects</legend>
        <textarea name="projects" value={formData.projects} onChange={handleChange} placeholder="Describe your projects..." style={textAreaStyle}></textarea>
      </fieldset>

      {/* CERTIFICATIONS */}
      <fieldset style={fieldsetStyle}>
        <legend>Certifications</legend>
        <textarea name="certifications" value={formData.certifications} onChange={handleChange} placeholder="List certifications..." style={textAreaStyle}></textarea>
      </fieldset>

      {/* SKILLS */}
      <fieldset style={fieldsetStyle}>
        <legend>Skills</legend>
        <textarea name="skills" value={formData.skills} onChange={handleChange} placeholder="List skills..." style={textAreaStyle}></textarea>
      </fieldset>

      {/* PUBLICATIONS */}
      <fieldset style={fieldsetStyle}>
        <legend>Publications</legend>
        <textarea name="publications" value={formData.publications} onChange={handleChange} placeholder="List publications..." style={textAreaStyle}></textarea>
      </fieldset>

      <button type="submit" style={buttonStyle}>Submit Update Request</button>
    </form>
  );
};

const fieldsetStyle = {
  marginBottom: '2rem',
  border: '1px solid #ccc',
  borderRadius: '10px',
  padding: '1rem',
};

const inputStyle = {
  display: 'block',
  width: '100%',
  padding: '0.8rem',
  marginBottom: '1rem',
  borderRadius: '6px',
  border: '1px solid #ccc',
};

const textAreaStyle = {
  width: '100%',
  height: '100px',
  padding: '0.8rem',
  borderRadius: '6px',
  border: '1px solid #ccc',
};

const buttonStyle = {
  padding: '0.9rem 2rem',
  backgroundColor: '#2e7d32',
  color: '#fff',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer',
  fontSize: '1rem',
};

export default UpdateForm;
