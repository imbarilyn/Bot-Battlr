import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({botArmyItem, setActive}) {
  const armyBot = () =>{
    return <BotCard  botArmyItem = {botArmyItem} setActive = {setActive}/>
  }
  //your bot army code here...
  

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {/*...and here...*/}
          {armyBot}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
