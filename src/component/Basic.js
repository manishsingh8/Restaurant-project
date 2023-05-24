import React, { useState } from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import FoodApi from "./FoodApi";
import Card from "./Card";
import './style.css';
import NavBar from "./NavBar";



const uniqueCatagory = [...new Set(FoodApi.map((currEle) =>
   currEle.category))
   ,"All"
];
console.log(uniqueCatagory);

const Basic = () => {
 
           const[food,setFood] = useState(FoodApi);
           const[navList,setNavList] = useState(uniqueCatagory);
           console.log(food);

           const filterItem =(category) =>{
           
            if(category === "All"){
              setFood(FoodApi);
              // return; if dont want to write else then use return
            }else{
               
            const updatedItem = FoodApi.filter((curr)=>{
              return curr.category === category                
         });
         setFood(updatedItem);
            }

           }
  return (
    <>
     <NavBar  navList={navList} filterItem ={filterItem}/>
     <Card foodApi={food}/>
    
    </>
  );
};

export default Basic;
