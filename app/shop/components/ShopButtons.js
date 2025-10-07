"use client";
import { useState } from 'react';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";

export default function ShopButtons() {
  const [value, setValue] = useState([1, 3]);
  const handleChange = (val) => setValue(val);

  return (
    <div className='shop-btn'>
        <ToggleButtonGroup type="checkbox" value={value} onChange={handleChange}>
        <MdKeyboardDoubleArrowLeft style={{margin: "9px auto", pfontSize: "20px", cursor: "pointer", color: "#D19C97"}}/>
      <ToggleButton id="tbg-btn-1" value={1} style={{backgroundColor:"#D19C97", border:"none" }}>
         1
      </ToggleButton>
      <ToggleButton id="tbg-btn-2" value={2} style={{backgroundColor:"#D19C97", border:"none"}}>
         2
      </ToggleButton>
      <ToggleButton id="tbg-btn-3" value={3} style={{backgroundColor:"#D19C97", border:"none"}}>
         3
      </ToggleButton>
      <MdKeyboardDoubleArrowRight style={{margin: "7px auto", pfontSize: "20px", cursor: "pointer", color: "#D19C97"}} />
    </ToggleButtonGroup>
    </div>
  );
}
