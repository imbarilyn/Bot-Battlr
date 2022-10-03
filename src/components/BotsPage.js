import React, { useEffect, useState } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  //start here with your code for step one
  const [activeBot, setActive] = useState(false)
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
      <YourBotArmy botArmyItem ={botArmyItem}  setActive ={setActive} activeBot = {activeBot}/>
      <BotCollection  botCol = {botCol}/>
    </div>
  )
}

export default BotsPage;
