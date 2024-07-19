import React from "react";
import "../resumePageSize.css";
import "./resume001.css";
import { useRef } from "react";
import { jsPDF } from "jspdf";
import { useReactToPrint } from 'react-to-print';
function Resume001() {
  const pdfRef = useRef(null);
  const handleDownload = () => {
    const content = pdfRef.current;

    const doc = new jsPDF("p", "pt", "a4");

    doc.html(content, {
      callback: function (doc) {
        doc.save("sample.pdf");
      },
    });
  };

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  
  return (
    <>
      <div  ref={componentRef}>
        <div>
        <div className="page">
          <div className="header-bg-color">
            <div className="header-text-center">
              <p>Dilip kumar romi</p>
              <div className="header-sub-text-center">
                <p>Your Professional Title</p>
              </div>
            </div>
          </div>
          <div class="left-column">
            <div>
              <p className="text-title">Contact</p>
              <p>123-589-22-88</p>
              <p>youremail@mail.com</p>
              <p>City, State</p>
            </div>
            <div class="skills">
              <h6>Skills</h6>
              <ul>
                <li>Relevant Skill 1</li>
                <li>Relevant Skill 2</li>
                <li>Relevant Skill 3</li>
              </ul>
            </div>
          </div>
          <div class="right-column">
            <div class="profile-summary">
              <p className="text-title">PROFILE</p>
              <p>
                Write a powerful performance summary here. Highlight your most
                valuable skills, qualifications, achievements, credentials, and
                other distinguishing information.
              </p>
            </div>
            <div class="experience">
              <p className="text-title">Professional Experience</p>
              <div class="job">
                <h6>Job Title</h6>
                <p>Company Name | City, State | Start Date - End Date</p>
                <p>
                  Summarize your main responsibilities and provide information
                  about the organization.
                </p>
                <ul >
                   <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, odio!</li>
                   <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, odio!</li>
                   <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, odio!</li>

                </ul>
              </div>
            </div>
            <div class="education">
              <h6>Education</h6>
              <div class="degree">
                <h6>Degree Name / Major</h6>
                <p>University Name | 2012-2014</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <button onClick={handlePrint}>Print article</button>
    </>
  );
}

export default Resume001;
