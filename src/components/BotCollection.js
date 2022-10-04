import React from "react";
import BotCard from "./BotCard";

function BotCollection({ botCol, botArmy, setBotArmy, setBotCol, setIsActive }) {
  // Your code here
  const col = botCol.map((bot) => {
   return  <BotCard key={bot.id} bot={bot} botArmy={botArmy} setBotArmy={setBotArmy} setBotCol={setBotCol} setIsActive={setIsActive}/>}
  )
  return (
    <div className="ui four column grid">
      <div className="row">
        
        {col}
      </div>
    </div>
  );
}

export default BotCollection;