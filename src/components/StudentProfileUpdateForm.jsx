  import React from "react";
  import { Link } from "react-router-dom";

  const StudentProfileUpdateForm = () => {
    return (
      <>
        <div className="update-form-wrapper">
          <h2 className="update-form-title">Student Profile Update Form</h2>
          <div className="update-form-section">
            {/* ✅ Text Left */}
            <div className="update-form-info">
              <p>
                Students can now update their academic and personal profile details with ease.
                Ensure your latest information is reflected in the system for accurate records and placement readiness.
              </p>
              <p>
                Keep your profile updated regularly to enhance visibility and stay connected.
              </p>

              <div className="update-form-box">
                <Link to="/sign-in?next=update-profile" className="update-form-link">
                  View Update Form →
                </Link>
              </div>
            </div>

            {/* ✅ Image Right */}
            <div className="update-form-image">
              <img
                src="/images/Update-image.jpg"
                alt="Update Form"
              />
            </div>
          </div>
        </div>

        <style>{`
          .update-form-wrapper {
            width: 100%;
            background-color: #f0f8f0;
            padding: 0;
            margin-top: 20px;
          }

          .update-form-title {
            text-align: center;
            color: green;
            font-size: 2.4rem;
            padding: 1rem 0;
            background-color: white;
            margin-top: 20px;
          }

          .update-form-section {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
            padding: 2rem;
            column-gap: 2.5cm;
          }

          .update-form-info {
            flex: 1;
            max-width: calc(100% - 270px - 2cm);
            margin-left: 2cm;
          }

          .update-form-info p {
            color: #444;
            font-size: 1.2rem;
            line-height: 1.8;
            margin-bottom: 1.2rem;
          }

          .update-form-box {
            display: inline-block;
            padding: 1rem 1.5rem;
            border: 2px solid #228b22;
            background-color: #ffffff;
            border-radius: 10px;
            transition: background-color 0.3s ease;
            margin-top: 1rem;
          }

          .update-form-box:hover {
            background-color: #eaf8ea;
          }

          .update-form-link {
            color: #228b22;
            font-weight: bold;
            font-size: 1.1rem;
            text-decoration: none;
          }

          .update-form-link:hover {
            text-decoration: underline;
          }

          .update-form-image img {
            width: 300px;
            height: 300px;
            object-fit: cover;
            border-radius: 50%;
            margin-right: 2cm;

            box-shadow: 0 0 25px rgba(0, 128, 0, 0.35);
            transition: box-shadow 0.3s ease-in-out;
          }

          .update-form-image img:hover {
            box-shadow: 0 0 35px rgba(0, 128, 0, 0.55);
          }

          @media (max-width: 768px) {
            .update-form-section {
              flex-direction: column;
              gap: 2rem;
            }

            .update-form-image img {
              margin: 0 auto;
            }

            .update-form-info {
              margin-left: 0;
              max-width: 100%;
              text-align: center;
            }
          }
        `}</style>
      </>
    );
  };

  export default StudentProfileUpdateForm;
