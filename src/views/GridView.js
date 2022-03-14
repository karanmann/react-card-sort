import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import GridCard from "../components/GridCard";

import searchIcon from "../assets/icons/searchicon.svg";
import sortingIcon from "../assets/icons/sortingicon.svg";
import listviewIcon from "../assets/icons/listview.svg";

const resultsToFetch = 50;
const URL = `https://randomuser.me/api/?results=${resultsToFetch}`;

export const GridView = () => {
  const [fetchedData, setFetchedData] = useState();
  const [fetchComplete, setFetchComplete] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setFetchedData(data);
        setFetchComplete(true);
      });
  }, []);

  if (!fetchComplete)
    return (
      <div className="loader_container">
        <div className="loader"></div>
      </div>
    );

  const accendingOrder = (a, b) => a.name.first.localeCompare(b.name.first);
  const decendingOrder = (a, b) => b.name.first.localeCompare(a.name.first);

  const filteredFetchedData = fetchedData.results
    .sort(toggle ? decendingOrder : accendingOrder)
    .filter((val) => {
      if (searchTerm === "") {
        return val;
      } else if (
        val.name.first.toLowerCase().includes(searchTerm.toLowerCase()) ||
        val.name.last.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return val;
      }
    });

  return (
    <>
      <h1 className="work_sans">Meet the Team</h1>
      <div className="cards_container">
        <div className="navbar flex_center_row">
          <div className="flex_center_row">
            <button className="sorting_icon" onClick={() => setToggle(!toggle)}>
              <img src={sortingIcon} alt="sorting" />
            </button>
            <div className="search_container">
              <img className="search_icon" src={searchIcon} alt="search" />
              <input
                className="search_input"
                type="text"
                name="Search"
                onChange={(event) => setSearchTerm(event.target.value)}
              />
            </div>
          </div>
          <div className="toggle_view_icon">
            <Link to="/listview">
              <img src={listviewIcon} alt="" />
            </Link>
          </div>
        </div>
        <div className="grid_cards_container">
          {filteredFetchedData.map((usersData, index) => (
            <GridCard key={index} usersData={usersData} />
          ))}
        </div>
      </div>
    </>
  );
};
