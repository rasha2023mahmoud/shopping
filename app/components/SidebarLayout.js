"use client";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import SplitButton from "react-bootstrap/SplitButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";

function SidebarLayout() {
  return (
    <>
      {["down-centered"].map((direction) => (
        <DropdownButton
          as={ButtonGroup}
          key={direction}
          id={`dropdown-button-drop-${direction}`}
          drop={direction}
          variant="rgb(209, 156, 151)"
          title={`Categories `}
          className="main-btn w-100"
        >
          <Dropdown drop="down">
            <Dropdown.Toggle
              as="button"
              variant="transparent"
              className="dropdown-item"
            >
              Dresses
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>Mens’s Dresses</Dropdown.Item>
              <Dropdown.Item>Women Dresses</Dropdown.Item>
              <Dropdown.Item>Baby’s Dresses</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown.Item eventKey="1">SleapWears</Dropdown.Item>
          <Dropdown.Item eventKey="2">SportWear</Dropdown.Item>
          <Dropdown.Item eventKey="3">Jumpsuits</Dropdown.Item>
          <Dropdown.Item eventKey="3">Blazers</Dropdown.Item>
          <Dropdown.Item eventKey="3">Jackets</Dropdown.Item>
          <Dropdown.Item eventKey="3">Shoes</Dropdown.Item>
        </DropdownButton>
      ))}
    </>
  );
}

export default SidebarLayout;
