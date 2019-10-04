import React, { useState } from "react";
import Display from "./Display";
import {Button} from 'semantic-ui-react';

function Dashboard() {
  const [balls, setBalls] = useState(0);
  const [strikes, setStrikes] = useState(0);

  const updateStrikes= () => {
    if (strikes >= 3) {
      setStrikes(0);
    } else {
      setStrikes(strikes + 1);
    }
  };

  const updateFouls= () => {
    if (strikes < 2) {
      setStrikes(0);
    } else {
      setStrikes(strikes + 1);
    }
  };
  
  const updateBalls = () => {
    if (balls >= 4) {
      setBalls(0);
    } else {
      setBalls(balls + 1);
    }
  };

  const updateHits =() => {
    setStrikes(0);
    setBalls(0);
  };


  return (

<div className='dash'>
<div>
   <Display balls={balls} strikes={strikes} />
   </div>
   <div>
   <div className="ui hidden divider"></div>
  <Button onClick={updateStrikes} > Strike </Button>
  <Button onClick={updateBalls} > Ball </Button>
  <Button onClick={updateFouls} > Foul </Button>
  <Button onClick={updateHits} > Hit </Button>
  <div className="ui hidden divider"></div>
  <div className="ui hidden divider"></div>
  </div>
  </div>
   

  );
  }



export default Dashboard;