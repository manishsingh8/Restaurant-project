import React from 'react'

const NavBar = ({navList,filterItem}) => {
  return (
    <>
       <nav>
       <div className="navbar">
        <div className="btn-group">
        {
          navList.map((currEle,index)=>{
             return(
              <button className="btn-group_item" key={index} onClick={()=>{filterItem(currEle)}}>{currEle}</button>
             )
          })
        }
        </div>
       </div>

     </nav>
    </>
  )
}

export default NavBar;
