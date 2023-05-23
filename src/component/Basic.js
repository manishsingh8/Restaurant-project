import React, { useState } from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import FoodApi from "./FoodApi";
import Card from "./Card";
import './style.css';

const Basic = () => {
           const[food,setFood] = useState(FoodApi);
           console.log(food);
  return (
    <>
    <div className="main-body">
     <Card foodApi={food}/>
     </div>
    </>
  );
};

export default Basic;
