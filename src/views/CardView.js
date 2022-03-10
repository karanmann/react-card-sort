import React from 'react'

export const CardView = ({fetchedData, mail, phone}) => {
  return (
    <div className="card-view-container">
        {fetchedData.results.map((usersData, index) => {
          return (
            <div key={index} className="card-view-card">
              <div className="color-container"></div>
              <p>
                <span className='karla'>{usersData.name.first}</span>{" "}
                <span className='karla'>{usersData.name.last}</span>
              </p>
              <img className="card-view-profile" src={usersData.picture.large} alt="" />
              <p className='lato'>{usersData.location.city}</p>
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
        })}
      </div>
  )
}
