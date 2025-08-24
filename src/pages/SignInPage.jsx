import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const SignInPage = () => {
  const [regNo, setRegNo] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isMobile, setIsMobile] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    // ✅ Dummy login logic — replace this with real API call later
    if (regNo === 'student123' && password === 'password') {
      const params = new URLSearchParams(location.search);
      const nextPage = params.get('next'); // ?next=update-profile

      if (nextPage === 'update-profile') {
        navigate('/update-profile-form');
      } else {
        navigate('/select-batch');
      }
    } else {
      setError('Invalid registration number or password.');
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        height: '100vh',
        fontFamily: 'Segoe UI, sans-serif',
      }}
    >
      {/* Left carousel */}
      <div
        style={{
          flex: 1,
          height: isMobile ? '250px' : '100vh',
          backgroundColor: '#f0f0f0',
        }}
      >
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          showArrows={false}
          interval={2000}
          transitionTime={1000}
          swipeable
          emulateTouch
        >
          <div>
            <img
              src="/images/student-profile/loginslide-1.jpg"
              alt="Slide 1"
              style={{
                width: '100%',
                height: isMobile ? '250px' : '100vh',
                objectFit: 'cover',
              }}
            />
          </div>
          <div>
            <img
              src="/images/student-profile/loginslide-2.jpg"
              alt="Slide 2"
              style={{
                width: '100%',
                height: isMobile ? '250px' : '100vh',
                objectFit: 'cover',
              }}
            />
          </div>
        </Carousel>
      </div>

      {/* Right login form */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#f0f8f0',
          padding: isMobile ? '20px' : '0',
        }}
      >
        <div
          style={{
            backgroundColor: '#fff',
            padding: '30px 25px',
            borderRadius: '12px',
            boxShadow: '0 8px 20px rgba(0, 128, 0, 0.1)',
            maxWidth: '360px',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {/* Logo */}
          <div
            style={{
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              backgroundColor: '#fff',
              border: '4px solid green',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              overflow: 'hidden',
              marginBottom: '20px',
            }}
          >
            <img
              src="/images/student-profile/siet-logo.jpg"
              alt="College Logo"
              style={{ width: '90%', height: 'auto', objectFit: 'contain' }}
            />
          </div>

          <div
            style={{
              fontSize: '20px',
              fontWeight: '600',
              color: 'green',
              marginBottom: '20px',
              textAlign: 'center',
            }}
          >
            Login
          </div>

          <form onSubmit={handleLogin} style={{ width: '100%' }}>
            {error && (
              <div
                style={{
                  color: 'red',
                  fontSize: '14px',
                  marginBottom: '10px',
                  textAlign: 'center',
                }}
              >
                {error}
              </div>
            )}

            {/* Username input */}
            <div style={{ marginBottom: '16px', position: 'relative' }}>
              <label
                htmlFor="regNo"
                style={{
                  fontSize: '14px',
                  fontWeight: '500',
                  marginBottom: '6px',
                  display: 'block',
                  color: '#333',
                }}
              >
                Username
              </label>
              <span
                style={{
                  position: 'absolute',
                  left: '12px',
                  top: '38px',
                  fontSize: '18px',
                  color: '#888',
                }}
              >
                👤
              </span>
              <input
                type="text"
                id="regNo"
                value={regNo}
                onChange={(e) => setRegNo(e.target.value)}
                required
                placeholder="Enter Registration Number"
                style={{
                  width: '100%',
                  padding: '12px 40px',
                  fontSize: '15px',
                  borderRadius: '8px',
                  border: '1px solid #ccc',
                  boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.1)',
                  outline: 'none',
                  boxSizing: 'border-box',
                }}
              />
            </div>

            {/* Password input */}
            <div style={{ marginBottom: '16px', position: 'relative' }}>
              <label
                htmlFor="password"
                style={{
                  fontSize: '14px',
                  fontWeight: '500',
                  marginBottom: '6px',
                  display: 'block',
                  color: '#333',
                }}
              >
                Password
              </label>
              <span
                style={{
                  position: 'absolute',
                  left: '12px',
                  top: '38px',
                  fontSize: '18px',
                  color: '#888',
                }}
              >
                🔒
              </span>
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Enter Password"
                style={{
                  width: '100%',
                  padding: '12px 40px',
                  fontSize: '15px',
                  borderRadius: '8px',
                  border: '1px solid #ccc',
                  boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.1)',
                  outline: 'none',
                  boxSizing: 'border-box',
                }}
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: 'absolute',
                  right: '12px',
                  top: '38px',
                  fontSize: '13px',
                  color: '#007bff',
                  cursor: 'pointer',
                }}
              >
                {showPassword ? 'Hide' : 'Show'}
              </span>
            </div>

            {/* Submit button */}
            <div style={{ textAlign: 'center', marginTop: '16px' }}>
              <button
                type="submit"
                style={{
                  padding: '10px 30px',
                  backgroundColor: 'green',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '6px',
                  fontSize: '15px',
                  cursor: 'pointer',
                }}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
