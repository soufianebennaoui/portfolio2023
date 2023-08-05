import React, { useState } from "react";
import { Slide } from "react-awesome-reveal";
import "./Qualification.css";

const Qualification: React.FC = () => {
  const [toggleModal, setToggleModal] = useState<number>(1);
  const toggleTab = (index: number): void => {
    setToggleModal(index);
  };

  return (
    <section className="qualification section" id="qualification">
      <Slide direction="left" triggerOnce>
        <h2 className="section__title">Qualification</h2>
      </Slide>
      <Slide direction="right" triggerOnce>
        <span className="section__subtitle">My personal journey</span>
      </Slide>
      <div className="qualification__container container">
        {/* START BUTTON */}
        <div className="qualification__tabs">
          <div
            className={
              toggleModal === 1
                ? "qualification__button  qualification__active button--flex"
                : "qualification__button  button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>
          <div
            className={
              toggleModal === 2
                ? "qualification__button  qualification__active button--flex"
                : "qualification__button  button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>
        {/* END BUTTON */}

        {/* Content 1 */}
        <Slide direction="left" triggerOnce>
          <div className="qualification__sections">
            <div
              className={
                toggleModal === 1
                  ? "qualification__content qualification__content-active"
                  : "qualification__content"
              }
            >
              {/* GRP 1 */}
              <div className="qualification__data">
                <div>
                  <h3 className="qualififaction__title">University Hassan II</h3>
                  <span className="qualification__subtitle">Licence
                  Fundamental degree in arabic law{" "}
                  </span>
                  <div className="qualification__calender">
                    <i className="uil uil-calender"></i>
                    2016 - 2021
                  </div>
                </div>
                <div>
                  <span className="qualifaction__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>
              {/* GRP 2 */}
              <div className="qualification__data">
                <div></div>
                <div>
                  <span className="qualifaction__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
                <div>
                  <h3 className="qualififaction__title">(IT-LEARNING)</h3>
                  <span className="qualification__subtitle">Licence
                  Professional University Degree in Application Design and Development Engineering
                  </span>
                  <div className="qualification__calender">
                    <i className="uil uil-calender"></i>
                    2020 - 2021
                  </div>
                </div>
              </div>
              {/* GRP 3 */}
              <div className="qualification__data">
                <div>
                  <h3 className="qualififaction__title">(ICTAP)</h3>
                  <span className="qualification__subtitle">
                  Technician Diploma Specialized in IT Development        
                  </span>
                  <div className="qualification__calender">
                    <i className="uil uil-calender"></i>
                    2018 - 2020
                  </div>
                </div>
                <div>
                  <span className="qualifaction__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>
              {/* GRP 4 */}
              <div className="qualification__data">
                <div></div>
                <div>
                  <span className="qualifaction__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
                <div>
                  <h3 className="qualififaction__title">(Baroudi)</h3>
                  <span className="qualification__subtitle">
                  Baccalaureate option Modern Letters
                  </span>
                  <div className="qualification__calender">
                    <i className="uil uil-calender"></i>
                    2015 - 2016
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Content 2 */}
          <div className="qualification__sections">
            <div
              className={
                toggleModal === 2
                  ? "qualification__content qualification__content-active"
                  : "qualification__content"
              }
            >
              {/* GRP 5 */}
              <div className="qualification__data">
                <div>
                  <h3 className="qualififaction__title">Internship(AKLINKS)</h3>
                  <span className="qualification__subtitle">
                    Developper web
                  </span>
                  <div className="qualification__calender">
                    <i className="uil uil-calender"></i>
                    2023(2 Months)
                  </div>
                </div>
                <div>
                  <span className="qualifaction__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>
              {/* GRP 6 */}
              <div className="qualification__data">
                <div></div>
                <div>
                  <span className="qualifaction__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
                <div>
                  <h3 className="qualififaction__title">Internship(WEB AGENCY MAROC)</h3>
                  <span className="qualification__subtitle">Internship</span>
                  <div className="qualification__calender">
                    <i className="uil uil-calender"></i>
                    2022(3 Months)
                  </div>
                </div>
              </div>
              {/* GRP 7 */}
              <div className="qualification__data">
                <div>
                  <h3 className="qualififaction__title">Internship(PROGICIEL SYSTEM)</h3>
                  <span className="qualification__subtitle">
                    Internship
                  </span>
                  <div className="qualification__calender">
                    <i className="uil uil-calender"></i>
                    2022(1 Months) 
                  </div>
                </div>
                <div>
                  <span className="qualifaction__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>
              {/* GRP 8 */}
              <div className="qualification__data">
                <div></div>
                <div>
                  <span className="qualifaction__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
                <div>
                  <h3 className="qualififaction__title">Working on printing company(IDEALE)</h3>
                  <span className="qualification__subtitle">
                    Worker
                  </span>
                  <div className="qualification__calender">
                    <i className="uil uil-calender"></i>
                    2018-2019(6 Months)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slide>
      </div>
    </section>
  );
};

export default Qualification;
