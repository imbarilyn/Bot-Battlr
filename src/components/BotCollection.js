import React from "react";
import BotCard from "./BotCard";

function BotCollection({ bots, botArmy, setBotArmy, setBotCol, setIsActive }) {
  // Your code here
  const col = bots.map((bot) => {
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