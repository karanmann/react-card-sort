import React from "react";

export const ListView = ({ fetchedData, mail, phone }) => {
  return (
    <div className="list-view-container">
      {fetchedData.results.map((usersData, index) => {
        return (
          <div key={index} className="list-view-card">
            <div className="list-view-card-userinfo">
              <img
                className="list-view-profile"
                src={usersData.picture.large}
                alt=""
              />
              <div className="list-name-info">
                <p>
                  <span className="karla">{usersData.name.first}</span>{" "}
                  <span className="karla">{usersData.name.last}</span>
                </p>
                <p className="lato">{usersData.location.city}</p>
              </div>
            </div>
            <div className="icons-container">
              <a href={"mailto:" + usersData.email}>
                <img className="mail-icon" src={mail} alt="mail icon" />
              </a>
              <a href={"tel:" + usersData.cell}>
                <img className="phone-icon" src={phone} alt="phone icon" />
              </a>
            </div>
            {/* <p>Cell:{usersData.cell}</p>
            <p>Email:{usersData.email}</p> */}
          </div>
        );
      })}
    </div>
  );
};
