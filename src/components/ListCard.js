import React from "react";

import mail from "../assets/icons/mail.svg";
import phone from "../assets/icons/phone.svg";

const ListCard = ({ usersData }) => {
  return (
    <div className="list_card flex_center_row">
      <div className="flex_center_row">
        <img
          className="cards_avatar list_avatar"
          src={usersData.picture.large ? usersData.picture.large : "Not Image"}
          alt="user"
        />
        <div>
          <p>
            <span className="karla">
              {usersData.name.first ? usersData.name.first : ""}
            </span>{" "}
            <span className="karla">
              {usersData.name.last ? usersData.name.last : ""}
            </span>
          </p>
          <p className="lato">
            {usersData.location.city ? usersData.location.city : "No City"}
          </p>
        </div>
      </div>
      <div className="icons_container">
        <a href={"mailto:" + usersData.email}>
          <img className="mail_icon" src={mail} alt="mail icon" />
        </a>
        <a href={"tel:" + usersData.cell}>
          <img className="phone_icon" src={phone} alt="phone icon" />
        </a>
      </div>
    </div>
  );
};

export default ListCard;
