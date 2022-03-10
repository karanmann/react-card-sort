import { useState, useEffect } from "react"
import {ListView} from './ListView'
import {CardView} from './CardView'
import mail from '../assets/icons/mail.svg'
import phone from '../assets/icons/phone.svg'

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
        <ListView fetchedData={fetchedData}mail={mail} phone={phone}/>
        <CardView fetchedData={fetchedData} mail={mail} phone={phone}/>
      </div>
    </div>
  );
};
