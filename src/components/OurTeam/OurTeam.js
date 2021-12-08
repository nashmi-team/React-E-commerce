import React from "react-dom";
import "./OurTeam.css";
const OurTeam = () => {
  return (
    <div>
      <h1 className="Ourteam-h">Our Team Members</h1>
      <div className="Ourteam-section">
        <div className="person">
          <img
            src="../../assets/farah.jpg"
            alt="Farah"
            className="img-person"
          />
          <div className="person-title">
            <h4> Farah Habarnih</h4>
            <h6> Scrum Master</h6>
          </div>
        </div>
        <div className="person">
          <img
            src="../../assets/Abdelkareem.jpg"
            alt="Abdelkareem"
            className="img-person"
          />
          <div className="person-title">
            <h4> Abdelkareem Aldeek</h4>
            <h6> Product Owner</h6>
          </div>
        </div>
        <div className="person">
          <img
            src="../../assets/Tharaa.jpg"
            alt="Tharaa"
            className="img-person"
          />
          <div className="person-title">
            <h4> Tharaa Ibrahim</h4>
            <h6> Front-end Developer</h6>
          </div>
        </div>
        <div className="person">
          <img
            src="../../assets/Ahmad.jpg"
            alt="Ahmad"
            className="img-person"
          />
          <div className="person-title">
            <h4>Ahmad Al-dabouqi</h4>
            <h6> Front-end Developer</h6>
          </div>
        </div>
        <div className="person">
          <img
            src="../../assets/Bisher.jpg"
            alt="Bisher"
            className="img-person"
          />
          <div className="person-title">
            <h4>Beshir Alkhadra</h4>
            <h6> Front-end Developer</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
