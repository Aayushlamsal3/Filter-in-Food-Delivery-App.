import React, { useState } from 'react'
import Menu from './Menu'


const Home = () => {
  const[items,setitems]=useState(Menu)

  const FilterItem=(CategItem)=>{
    const UpdatedItem=Menu.filter((CurElem)=>{
      return CurElem.category===CategItem;
    })
    setitems(UpdatedItem)
  }
  return (
    <>
    <div className='container container-fluid d-flex justify-content-evenly'>
    <button className='btn btn-warning' onClick={()=>setitems(Menu)}>All Items</button>
      <button className='btn btn-warning'onClick={()=>FilterItem('breakfast')} >Quick Breakfast</button>
      <button className='btn btn-warning' onClick={()=>FilterItem("lunch")}>Special Lunch</button>
      <button className='btn btn-warning' onClick={()=>FilterItem("dinner")}>Dinner and Drinks</button>
      </div>
<div className="box">
{items.map((elem)=>{
        return(
         
                      <div className='container mt-5 new'>
        <div className="card" style={{width: "fit-content"}}>
            <img  src={elem.image} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{elem.id}</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-success">Order Now</a>
            </div>
          </div>
</div>
         
        )
      })}
</div>
  </>
  )
}

export default Home;
