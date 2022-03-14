import React from "react";
import mail from "../assets/icons/mail.svg";
import phone from "../assets/icons/phone.svg";

const GridCard = ({usersData}) => {
  return (
    <div className="card-view-card">
      <div className="color-container"></div>
      <p>
        <span className="karla">{usersData.name.first}</span>{" "}
        <span className="karla">{usersData.name.last}</span>
      </p>
      <img className="card-view-profile" src={usersData.picture.large ? usersData.picture.large : "No Image" } alt="" />
      <p className="lato">{usersData.location.city ? usersData.location.city : "No City"}</p>
      <div className="icons-container">
        <a href={"mailto:" + usersData.email}>
          <img className="mail-icon" src={mail} alt="mail icon" />
        </a>
        <a href={"tel:" + usersData.cell}>
          <img className="phone-icon" src={phone} alt="phone icon" />
        </a>
      </div>
    </div>
  );
};

export default GridCard;
