import React from "react";

const BackEnd: React.FC = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Backend Development</h3>
      <div className="skills__box">
        <div className="skills__group">
          {/*  */}
          <div className="skills__data">
            {/* <i className="bx bx-badge-check"></i> */}
            {/* Node logo img */}
            <img
              src={require("../logos/nodejs.png") as string}
              alt="Node logo"
              className="skills__logo"
            />

            <div>
              <h3 className="skills__name">Node</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>
          {/*  */}
          <div className="skills__data">
            {/* <i className="bx bx-badge-check"></i> */}
            {/* Pythton logo img */}
            <img
              src={require("../logos/python.png") as string}
              alt="Python logo"
              className="skills__logo"
            />

            <div>
              <h3 className="skills__name">Python</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

        {/* ====== */}
        <div className="skills__group">
          {/*  */}

          <div className="skills__data">
            {/* <i className="bx bx-badge-check"></i> */}
            {/* MySQL logo img */}
            <img
              src={require("../logos/mysql.png") as string}
              alt="MySQL logo"
              className="skills__logo"
            />

            <div>
              <h3 className="skills__name">MySQL</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            {/* <i className="bx bx-badge-check"></i> */}
            {/* PHP  */}
            <img
              src={require("../logos/php.png") as string}
              alt="PHP logo"
              className="skills__logo"
            />

            <div>
              <h3 className="skills__name">PHP</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>
        </div>



        </div>
      </div>
    </div>
  );
};

export default BackEnd;
