import React from 'react'
import mail from '../assets/icons/mail.svg'
import phone from '../assets/icons/phone.svg'

export const CardView = ({fetchedData}) => {
  return (
    <div className="card-view-container">
        {fetchedData.results.map((usersData) => {
          return (
            <div className="card-view-card">
              <p>
                <span className='karla'>{usersData.name.first}</span>{" "}
                <span className='karla'>{usersData.name.last}</span>
              </p>
              <img className="card-view-profile" src={usersData.picture.large} alt="" />
              <p className='lato'>{usersData.location.city}</p>
              {/* <p>Cell:{usersData.cell}</p>
              <p>Email:{usersData.email}</p> */}
              <div className='icons-container'>
                <img src={mail} alt="mail icon" />
                <img className="phone-icon" src={phone} alt="phone icon" />
              </div>
            </div>
          );
        })}
      </div>
  )
}
