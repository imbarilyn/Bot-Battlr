import React from "react";
import BotCard from "./BotCard";
import BotSpecs from "./BotSpecs";


function BotCollection({botCol}) {
  const bots = botCol.map(bot => {
    return(
      <>
        <BotCard  key = {bot.id} bot ={bot}/>
       <BotSpecs key = {bot.id}  bot={bot}/></>
     
   ) })
  console.log(botCol)
  // Your code here
  return (
    <div className="ui four column grid">
      <div className="row">
        {bots}
        {/*...and here..*/}
        
      </div>
    </div>
  );
}

export default BotCollection;
