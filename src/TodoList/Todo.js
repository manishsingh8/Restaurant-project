import React, { useEffect, useState } from 'react';
import './style.css';

const getLocalData = () => {
    const lists = localStorage.getItem("listItem");

    if(lists){
        return JSON.parse(lists);
    }else{
        return [];
    }
}

const Todo = () => {

    const [inputData,setInputData] = useState("");
    const [addItem,setAddItem] = useState(getLocalData());

    const addItems =()=>{
        if(!inputData){
            alert("please add item first");
        }
        else{
            const newInputData = {
                id:new Date().getTime().toString(),
                name:inputData,
            }
            setAddItem([...addItem,newInputData]);
            setInputData("");
        }      
    }
    // delete item in the list
    const deleteItem =(index)=>{
        const updatedItem = addItem.filter((currEle)=>{
            return(
                currEle.id !== index
            )
        });
        setAddItem(updatedItem);
    }
    // remove all Items from list
    const removeAll =()=>{
        setAddItem([]);
    }
    // add data to localStorage
    useEffect(()=>{
          localStorage.setItem("listItem",JSON.stringify(addItem));
    },[addItem]);
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
                placeholder='✍️Add item'
                className='form-control'
                value={inputData}
                onChange={(event)=>{setInputData(event.target.value)}}
                />
                <i className="fa-solid fa-plus addIcon" onClick={addItems}></i>
            </div>
            <div className="showItems">
                {/* show added item */}
                {
                    addItem.map((currItem)=>{
                        return(
                            <div className='eachItem' key={currItem.id}>
                                <h6>{currItem.name}</h6> 
                                <div className='todoBtn'>
                                <i className="fa-solid fa-pen-to-square edit"></i>
                                <i className="fa-solid fa-trash delete" onClick={()=>deleteItem(currItem.id)}></i>
                                </div>
                            </div>
                        )
                    })
                }
                <button className='btn' onClick={removeAll} >
                    Delete List
                </button>
            </div>
        </div>
      </div>
    </>
  )
}

export default Todo;
