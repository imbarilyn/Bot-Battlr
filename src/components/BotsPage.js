import React, { useEffect, useState } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  //start here with your code for step one
 const [botArmy, setBotArmy] = useState([]);
  const [botCol , setBotCol] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:8002/bots`)
    .then(resp => resp.json())
    .then(bots => setBotCol(bots))
    
  }, [])
 // console.log(botCol);

 function botArmyItem (army){
  const clickedArmy = [...army];
  setBotArmy(clickedArmy)
 }
  return (
    <div>
      <YourBotArmy botArmyItem ={botArmyItem} />
      <BotCollection  botCol = {botCol}/>
    </div>
  )
}

export default BotsPage;
