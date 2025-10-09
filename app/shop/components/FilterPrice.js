"use client";
import { useEffect, useState } from "react";
export default function FilterPrice() {
  const [data, setData] = useState(null);
  const [checkItems, setCheckItems] = useState({});
  useEffect(()=>{
      async function fetchFilter(){
        const response = await fetch("/filter.json");
        const json = await response.json();
        setData(json);
      }
      fetchFilter()
  },[])
  const handleCheck = (id) =>{
    setCheckItems((prev)=>({
      ...prev,
      [id] : !prev[id]
    }))
  }

  if(!data) return <p>data loading ....</p>
  return (
    <>
      {/* filter price */}
       <div className="filter-container">
        <h4>Filter Price</h4>
        {data.priceFilters.map((item)=>{
            return (
              <div className="filter-brice" key={item.id}>
                <div className="check-price">
                  <input type="checkbox" id={item.id} checked={!!checkItems[item.id]} onChange={() => handleCheck(item.id)}/> 
                  <label htmlFor={item.id} style={{color:checkItems[item.id] ? "#D19C97" : "#333",}}>{item.label}</label>
                </div>
                <span>{item.value}</span>
            </div>
            )
        })}
      

      {/* colorFilters */}
      <div className="color-container">
        <h4>Color Filters</h4>
        {
          data.colorFilters.map((item)=>{
            return(
             <div className="check-color" key={item.id}>
              <div className="first-color">
                <input type="checkbox" id={item.id} checked={!!checkItems[item.id]} onChange={()=> handleCheck(item.id)} />
                <label htmlFor={item.id} style={{color:checkItems[item.id] ? "#D19C97" : "#333"}}>{item.label}</label>
              </div>
              <span>{item.value}</span>
             </div> 
            )
          })
        }
      </div>
          {/* size container */}
          <div className="size-container">
          <h4>Filter Size</h4>
          {
            data.sizeFilters.map((item) =>{
              return(
                <div  className="check-size" key={item.id}>
                  <div className="filter-size">
                  <input type="checkbox" id={item.id} checked={!!checkItems[item.id]} onChange={()=> handleCheck(item.id)}/>
                  <label htmlFor={item.id} style={{color: checkItems[item.id] ? "#D19C97" : "#333"}}>{item.label}</label>
                  </div>
                  <span>{item.value}</span>
                </div>
              )
            })
          }
          </div>
          </div>
    </>
  );
}
