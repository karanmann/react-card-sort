import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import GridCard from "../components/GridCard"

import searchIcon from "../assets/icons/searchicon.svg"
import sortingIcon from "../assets/icons/sortingicon.svg"
import listviewIcon from "../assets/icons/listview.svg"


export const GridView = () => {
  const [fetchedData, setFetchedData] = useState()
  const [fetchComplete, setFetchComplete] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [toggle, setToggle] = useState(false)

  const URL = "https://randomuser.me/api/?results=50"

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setFetchedData(data)
        setFetchComplete(true)
      })
  }, [])

  if (!fetchComplete)
    return (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    )

  const accendingOrder = (a, b) => a.name.first.localeCompare(b.name.first)
  const decendingOrder = (a, b) => b.name.first.localeCompare(a.name.first)

  const filteredFetchedData = fetchedData.results
    .sort(toggle ? accendingOrder : decendingOrder)
    .filter(val => {
      if (searchTerm === "") {
        return val;
      } else if (
        val.name.first.toLowerCase().includes(searchTerm.toLowerCase()) ||
        val.name.last.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return val
      }
    })

  return (
    <>
      <h1 className="work-sans">Meet the Team</h1>
      <div className="search-toggle-bar">
        <div className="search-left-container">
          <button onClick={() => setToggle(!toggle)}>
            <img className="search-sortingicon" src={sortingIcon} alt="" />
          </button>
          <img className="search-searchicon" src={searchIcon} alt="" />
          <input
            className="search-input"
            type="text"
            name="Search"
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        </div>
        <div>
          <Link to="/listview">
            <img className="search-listviewicon" src={listviewIcon} alt="" />
          </Link>
        </div>
      </div>
      <div>
        <div className="card-view-container">
          {filteredFetchedData.map((usersData, index) => <GridCard key={index} usersData={usersData} /> )}
        </div>
      </div>
    </>
  )
}
