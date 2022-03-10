import React from 'react'

export const ListView = ({fetchedData}) => {
  return (
    <div className='list-view-container'>
        {fetchedData.results.map((usersData) => {
          return (
            <div className='list-view-card'>
              <p>
                <span className="karla">{usersData.name.first}</span>{" "}
                <span className="karla">{usersData.name.last}</span>
              </p>
              <img src={usersData.picture.large} alt="" />
              <p className='lato'>{usersData.location.city}</p>
              <p>Cell:{usersData.cell}</p>
              <p>Email:{usersData.email}</p>
            </div>
          );
        })}
      </div>
  )
}
