"use client";
import { useEffect, useState } from "react";
export default function ColorfulInput(){
    const[select, setSelect] = useState(null);
    const [data, setData] = useState({});
    const handleCheck= (id) =>{
        setSelect(id) = ((prev) =>({
            ...prev,
            [id] : !prev[id],
        }))
    }

    const checkSizes = [
        {id: "sizes1", label: "XS"},
        {id: "sizes2", label: "S"},
        {id: "sizes3", label: "M"},
        {id: "sizes3", label: "L"},
        {id: "sizes3", label: "XL"},
    ];

    const checkColors = [
        {id: "color1", label: "Black"},
        {id: "color1", label: "White"},
        {id: "color1", label: "Red"},
        {id: "color1", label: "Black"},
        {id: "color1", label: "Green"},
        {id: "color1", label: "Blue"},
    ];

    return (
        <>
        <div>
        {checkSizes.map((item)=>{
            return (
                <div key={item.id}>
                    <input type="checkbox" id={item.id} checked={!!data[item.id]} onChange={()=>handleCheck(item.id)}/>
                    <label htmlFor={item.id} style={{color:data[item.id]? "#D19C97" : "#333" }}>{item.label}</label>
                </div>
            )
        })}
        </div>

        <div>
        {checkColors.map((item)=>{
            return (
                <div key={item.id}>
                    <input type="checkbox" id={item.id} checked={!!data[item.id]} onChange={()=>handleCheck(item.id)}/>
                    <label htmlFor={item.id} style={{color:data[item.id]? "#D19C97" : "#333" }}>{item.label}</label>
                </div>
            )
        })}
        </div>

        </>
    )
}