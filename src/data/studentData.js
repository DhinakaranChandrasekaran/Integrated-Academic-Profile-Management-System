// src/data/studentData.js

const allStudents = [
  {
    personalDetails: {
      regNo: "714023104001",
      name: "Dhinakaran C",
      dob: "18-04-2005",
      department: "Computer Science",
      bloodGroup: "O+",
      address: "Coimbatore, Tamil Nadu",
      academicYear: "2022–2026",
      yearOfPassing: "2026",
      photo: "/images/student-profile/mainprofile/photo/714023104020.jpg"
    },
    academicDetails: {
      sslc: {
        board: "State Board",
        institution: "ABC Matriculation School",
        year: "2019",
        percentage: "95%"
      },
      hsc: {
        board: "State Board",
        institution: "ABC Matriculation School",
        year: "2021",
        percentage: "92%"
      },
      ug: {
        department: "Computer Science and Engineering",
        institution: "SIET College of Engineering",
        year: "2025",
        cgpa: "8.7"
      }
    },
    sgpaList: [
      "Semester 1: 8.2",
      "Semester 2: 8.3",
      "Semester 3: 8.1",
      "Semester 4: 8.5",
      "Semester 5: 8.4",
      "Semester 6: 8.6",
      "Semester 7: 8.7",
      "Semester 8: 9.0"
    ],
    overallCgpa: "8.6",
    skills: ["Java", "C++", "Python", "HTML", "CSS", "JavaScript"],
    certifications: [
      {
        course: "Full Stack Web Development",
        domain: "Web Development",
        date: "Jan 2024",
        file: "/images/student-profile/mainprofile/certificate/DHINAKARAN-JAVA-CERTIFICATE.pdf"
      },
      {
        course: "Machine Learning",
        domain: "AI/ML",
        date: "Feb 2024",
        file: "/certificates/ml.pdf"
      },
      {
        course: "Cybersecurity Essentials",
        domain: "Security",
        date: "Mar 2024",
        file: "/certificates/cybersecurity.pdf"
      }
    ],
    project: {
      title: "PLACEMENT PROFILE SYSTEM",
      domain: "Web Development",
      languages: ["HTML", "CSS", "Node.js"],
      abstract: "An AI-powered chatbot system that responds intelligently to user queries using NLP.",
      demoVideo: "/images/student-profile/mainprofile/video/PPS-Final.mp4",
      reportPdf: "/images/student-profile/mainprofile/report/PLACEMENT-SYSTEM-REPORT.docx"
    },
    publication: {
      title: "PLACEMENT PROFILE SYSTEM",
      journal: "IJEI",
      authors: ["Dhina", "Karan"],
      abstract: "This research explores the application of IoT and AI in smart agriculture for improving productivity.",
      date: "Feb 2025",
      paperPdf: "/images/student-profile/mainprofile/paper/PLACEMENT-SYSTEM-REPORT.docx",
      certificatePdf: "/images/student-profile/mainprofile/certificate/DHINAKARAN-JAVA-CERTIFICATE.pdf"
    },
    resume: {
      name: "Dhinakaran_Resume.pdf",
      file: "/images/student-profile/mainprofile/resume/714023104020(Resume).pdf"
    },
    placementPortal: {
      label: "LMS Portal",
      url: "http://110.172.151.102/my/"
    },
    linkedin: "https://www.linkedin.com/in/dhinakaran-chandrasekaran",
    contact: {
      email: "dhinakaranc23cse@srishakthi.ac.in",
      phone: "+91 7395813707"
    }
  },

  {
    personalDetails: {
      regNo: "714023104002",
      name: "Harini M",
      dob: "02-06-2005",
      department: "Computer Science",
      bloodGroup: "A+",
      address: "Pollachi, Tamil Nadu",
      academicYear: "2022–2026",
      yearOfPassing: "2026",
      photo: "/images/student-profile/mainprofile/photo/714023104035.jpg"
    },
    academicDetails: {
      sslc: {
        board: "CBSE",
        institution: "XYZ Public School",
        year: "2019",
        percentage: "96%"
      },
      hsc: {
        board: "CBSE",
        institution: "XYZ Public School",
        year: "2021",
        percentage: "94%"
      },
      ug: {
        department: "Computer Science and Engineering",
        institution: "SIET College of Engineering",
        year: "2025",
        cgpa: "8.9"
      }
    },
    sgpaList: [
      8.4,
      8.5,
      8.7,
      8.9,
      9.1,
      9.0,
      9.2,
      9.3
    ],
    overallCgpa: "8.9",
    skills: ["Python", "R", "SQL", "HTML", "CSS", "React"],
    certifications: [
      {
        course: "Data Science with Python",
        domain: "Data Science",
        date: "Jan 2024",
        file: "/images/student-profile/mainprofile/certificate/python_basic certificate.pdf"
      },
      {
        course: "React Frontend",
        domain: "Web Development",
        date: "Feb 2024",
        file: "/certificates/react.pdf"
      }
    ],
    project: {
      title: "Exam Seating Arrangement",
      domain: "Web Development",
      languages: ["HTML", "CSS", "Node.js"],
      abstract: "An IoT-based system for tracking and managing municipal waste using smart sensors.",
      demoVideo: "/images/student-profile/mainprofile/video/PPS-Final.mp4",
      reportPdf: "/images/student-profile/mainprofile/report/EXAM-SEATING-ARRANGEMENT-SYSTEM.docx"
    },
    publication: {
      title: "Exam Seating Arrangement",
      journal: "IJEI",
      authors: ["Harini M", "Dinesh J"],
      abstract: "Using AI algorithms to monitor and predict patient health metrics in real-time.",
      date: "Mar 2024",
      paperPdf: "/images/student-profile/mainprofile/paper/1406228235.pdf",
      certificatePdf: "/images/student-profile/mainprofile/papercertify/IJEI-32.pdf"
    },
    resume: {
      name: "HariniM_Resume.pdf",
      file: "/images/student-profile/mainprofile/resume/714023104020(Resume).pdf"
    },
    placementPortal: {
      label: "LMS Portal",
      url: "http://110.172.151.102/my/"
    },
    linkedin: "https://www.linkedin.com/in/harini-m-456789123",
    contact: {
      email: "harinim23cse@srishakthi.ac.in",
      phone: "+91 9876543210"
    }
  }
];

export default allStudents;
