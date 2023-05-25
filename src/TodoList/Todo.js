import React, { useState } from 'react';
import './style.css';

const Todo = () => {

    const [inputData,setInputData] = useState("");
    const [addItem,setAddItem] = useState([]);

    const addItems =()=>{
        if(!inputData){
            alert("please add item first");
        }
        else{
            setAddItem([...addItem,inputData]);
        }
           
    }

  return (
    <>
      <div className="main-div">
        <div className="child_div">
            <figure className='image'>
                <img src="./images/todo.jpg" alt="todo image" className='img' />
                <figcaption style={{ marginLeft:"23%",color:"white"}}>Add your list item here</figcaption>

            </figure>
            <div className="addItems">
                <input type="text"
                placeholder='Add item'
                className='form-control'
                value={inputData}
                onChange={(event)=>{setInputData(event.target.value)}}
                />
                <i className="fa-solid fa-plus addIcon" onClick={addItems}></i>
            </div>
            <div className="showItems">
                {/* show added item */}
                {
                    addItem.map((currItem,index)=>{
                        return(
                            <div className='eachItem'>
                                <h6>{currItem}</h6> 
                                <div className='todoBtn'>
                                <i className="fa-solid fa-pen-to-square edit"></i>
                                <i className="fa-solid fa-trash delete"></i>
                                </div>
                            </div>
                        )
                    })
                }

                


                <button className='btn' data-sm-link-text="Remove all">
                    Delete List
                </button>
            </div>
        </div>
      </div>
    </>
  )
}

export default Todo;
