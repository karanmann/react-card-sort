import { useState, useEffect } from "react"
import {ListView} from './ListView'
import {CardView} from './CardView'


// const backgroundArray = ['#A7B8A8', '#E1D3C7', '#E8CDAD']

// const randomColor = () => {


// }

export const MainView = () => {
  const [fetchedData, setFetchedData] = useState();
  const [fetchComplete, setFetchComplete] = useState(false);

  const URL = "https://randomuser.me/api/?results=50";

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setFetchedData(data);
        setFetchComplete(true);
      });
  }, []);

  if (!fetchComplete) return <h1>Loading...</h1>;

  return (
    <div>
      <h1 className="work-sans">Meet the Team</h1>
      <div>
        <input type="text" name="Search" id="" />
        <button>Toggle View!</button>
      </div>
      <div className='cards-container'>
        <CardView fetchedData={fetchedData}/>
        <ListView fetchedData={fetchedData}/>
      </div>
    </div>
  );
};
