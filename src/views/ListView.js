import { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import searchIcon from "../assets/icons/searchicon.svg"
import sortingIcon from "../assets/icons/sortingicon.svg"
import listviewIcon from "../assets/icons/listview.svg"
import cardviewIcon from "../assets/icons/cardview.svg"
import mail from '../assets/icons/mail.svg'
import phone from '../assets/icons/phone.svg'

export const ListView = () => {

  const [fetchedData, setFetchedData] = useState()
  const [fetchComplete, setFetchComplete] = useState(false)

  const URL = "https://randomuser.me/api/?results=50"

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setFetchedData(data);
        setFetchComplete(true);
      });
  }, []);

  if (!fetchComplete) return <div className='loader-container'><div className='loader'></div></div>

  return (
    <>
      <h1 className="work-sans">Meet the Team</h1>
      <div className="search-toggle-bar">
        <div className="search-left-container">
          <img className="search-sortingicon" src={sortingIcon} alt="" />
          <img className="search-searchicon" src={searchIcon} alt="" />
          <input className="search-input" type="text" name="Search" />
        </div>
        <div>
          <Link to="/cardview">
            <img className="search-cardviewicon" src={cardviewIcon} alt="" />
          </Link>
        </div>
      </div>
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
            </div>
          )
        })}
      </div>
    </>
  )
}
