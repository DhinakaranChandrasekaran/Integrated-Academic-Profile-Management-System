import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Main Pages
import HomePage from './pages/HomePage';
import ChairmanDetails from './pages/ChairmanDetails';
import PrincipalDetails from './pages/PrincipalDetails';
import DepartmentList from './pages/DepartmentList';
import DepartmentDetails from './pages/DepartmentDetails';

// Student Profile Flow
import WelcomePage from './pages/WelcomePage';
import SignInPage from './pages/SignInPage';            // ✅ Used for both login flows
import BatchSelectionPage from './pages/BatchSelectionPage';
import DepartmentSelectionPage from './pages/DepartmentSelectionPage';
import StudentListPage from './pages/StudentListPage';
import StudentProfileDetail from './pages/StudentProfileDetail';

// Update Profile Form
import UpdateForm from './pages/UpdateForm';             // ✅ Final form page

// Project & Publication Detail View
import ProjectDetailPage from './pages/ProjectDetailPage';
import PublicationDetailPage from './pages/PublicationDetailPage';

import './App.css';

function App() {
  return (
    <Router>
      <Routes>

        {/* ---------- Main Pages ---------- */}
        <Route path="/" element={<HomePage />} />
        <Route path="/ChairmanDetails" element={<ChairmanDetails />} />
        <Route path="/PrincipalDetails" element={<PrincipalDetails />} />
        <Route path="/departments" element={<DepartmentList />} />
        <Route path="/department/:id" element={<DepartmentDetails />} />

        {/* ---------- Student Profile Flow ---------- */}
        <Route path="/student-profile/welcome" element={<WelcomePage />} />
        <Route path="/sign-in" element={<SignInPage />} /> {/* ✅ Shared for both */}
        <Route path="/select-batch" element={<BatchSelectionPage />} />
        <Route path="/select-department" element={<DepartmentSelectionPage />} />
        <Route path="/student-list" element={<StudentListPage />} />
        <Route path="/student-profile/:regNo" element={<StudentProfileDetail />} />

        {/* ---------- Update Profile Flow ---------- */}
        <Route path="/update-profile-form" element={<UpdateForm />} />

        {/* ---------- Detail Pages ---------- */}
        <Route path="/projects/:title" element={<ProjectDetailPage />} />
        <Route path="/publications/:title" element={<PublicationDetailPage />} />

      </Routes>
    </Router>
  );
}

export default App;
