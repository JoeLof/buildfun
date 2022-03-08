import './App.css';
import { useState } from "react";
import Hello from './Hello.js';
import FeaturedPark from './FeaturedPark.js';
import UserLog from './UserLog.js';

function App(){
  const [loggedIn, setLoggedIn] = useState(true);

  const logOut = function(){
    setLoggedIn(false);
  }
  const logIn = function(){
    setLoggedIn(true);
  }
  


  const [userName, setUserName] = useState('Joe');
  const [parks, setParks] = useState(['High Park', "Sunnybrook", "Carr Street Parkette"])
  console.log(parks);



  const removePark = (park) =>{
    console.log(park)
    const oldParks = [...parks];
    console.log(oldParks);

    const updatedParks = oldParks.filter((filteredPark) =>{
      return filteredPark !== park
    });
    console.log(updatedParks);

    setParks(updatedParks);
  }

  return (
    <div>
      <UserLog user={loggedIn} logOut={logOut} logIn={logIn}/>

      <Hello name={userName}/>
      {parks.map((parkName)=>{
        const anonFunction = () => {
          removePark(parkName)
        }
        return <FeaturedPark name={parkName} removePark={ anonFunction } />
      })}
    </div>
  );
}

export default App;
