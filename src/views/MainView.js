import {useState, useEffect} from 'react';

export const MainView = () => {
  const [fetchedData, setFetchedData] = useState()
  const [fetchComplete, setFetchComplete] = useState(false)

  const URL = "https://randomuser.me/api/?results=50"

  useEffect(() => {
    fetch(URL)
    .then(res => res.json())
    .then(data => {
      setFetchedData(data)
      setFetchComplete(true)
    })
  },[]) 

  if (!fetchComplete) return <h1>Loading...</h1>

  return (
    
    <div>
      <h1>123</h1>
      <div>
        {fetchedData.results.map(usersData => {
          return (
          <div>
            <p><span>{usersData.name.first}</span> <span>{usersData.name.last}</span></p>
            <img src={usersData.picture.large} alt="" />
            <p>{usersData.location.city}</p>
            <p>Cell:{usersData.cell}</p>
            <p>Email:{usersData.email}</p>
          </div>
        )})}
      </div>
    </div>
  )
}