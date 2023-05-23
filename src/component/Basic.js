import React, { useState } from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import FoodApi from "./FoodApi";
import Card from "./Card";
import './style.css';



const   uniqueCatagory =[...new Set (FoodApi.map((currEle)=>{
  return currEle.category;
}))];

console.log(uniqueCatagory);


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
        {
          uniqueCatagory.map((currEle,index)=>{
             return(
              <button className="btn-group_item" key={index}>{currEle}</button>
             )
          })
        }
        </div>
       </div>

     </nav>
     <Card foodApi={food}/>
    
    </>
  );
};

export default Basic;
