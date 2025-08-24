import React from 'react';

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <p>© {new Date().getFullYear()} Your College Name. All rights reserved.</p>
      </footer>
      <style>{`
        .footer {
          background-color: #333;
          color: #fff;
          text-align: center;
          padding: 1rem;
          margin-top: auto;
        }
        .footer p {
          margin: 0;
          font-size: 0.9rem;
        }
      `}</style>
    </>
  );
};

export default Footer;
