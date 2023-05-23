import React, { useState } from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import FoodApi from "./FoodApi";
import Card from "./Card";
import './style.css';

const Basic = () => {
           const[food,setFood] = useState(FoodApi);
           console.log(food);

           const filterItem =(category) =>{
            const updatedItem = FoodApi.filter((curr)=>{
                 return curr.category === category                
            });
            setFood(updatedItem);
           }
  return (
    <>
     <nav>
       <div className="navbar">
        <div className="btn-group">
          <button className="btn-group_item" onClick={()=>filterItem("breakfast")}>BreakFast</button>
          <button className="btn-group_item" onClick={()=>filterItem("lunch")}>Lunch</button>
          <button className="btn-group_item" onClick={()=>filterItem("snacks")}>Snacks</button>
          <button className="btn-group_item" onClick={()=>filterItem("dinner")}>Dinner</button>
          <button className="btn-group_item" onClick={()=>setFood(FoodApi)}>All</button>
        </div>
       </div>

     </nav>
     <Card foodApi={food}/>
    
    </>
  );
};

export default Basic;
