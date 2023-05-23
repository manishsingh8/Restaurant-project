import React, { useState } from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import FoodApi from "./FoodApi";
import Card from "./Card";
// import './style.css';

const Basic = () => {
           const[food,setFood] = useState(FoodApi);
           console.log(food);
  return (
    <>
   
     <Card foodApi={food}/>
    
    </>
  );
};

export default Basic;
