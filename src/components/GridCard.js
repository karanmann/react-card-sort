import React from "react";
import mail from "../assets/icons/mail.svg";
import phone from "../assets/icons/phone.svg";

const GridCard = ({usersData}) => {
  return (
    <div className="grid_card flex_center_column">
      <p className="card_name">
        <span className="karla" aria-label={usersData.name.first}>{usersData.name.first}</span>{" "}
        <span className="karla" aria-label={usersData.name.last}>{usersData.name.last}</span>
      </p> 
      <img className="cards_avatar"src={usersData.picture.large ? usersData.picture.large : "No Image" } alt="user" aria-label="user image"/>
      <p className="lato card_location" aria-label={usersData.location.city}>{usersData.location.city ? usersData.location.city : "No City"}</p>
      <div className="icons_container">
        <a href={"mailto:" + usersData.email} aria-label={usersData.email}>
          <img className="mail_icon" src={mail} alt="mail icon" />
        </a>
        <a href={"tel:" + usersData.cell} aria-label={usersData.cell}>
          <img className="phone_icon" src={phone} alt="phone icon" />
        </a>
      </div>
    </div>
  );
};

export default GridCard;
