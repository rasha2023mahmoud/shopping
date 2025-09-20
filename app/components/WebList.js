"use client";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

export default function webList() {
  return (
    <>
      <div className="first-list">
        <ul>
          <li className="icon">Home</li>
          <li className="icon">Shop</li>
          <li className="icon">Shop Details</li>
          <DropdownButton
            className="pages icon"
            id="dropdown-basic-button"
            variant="transparent"
            title="Pages"
            style={{ fontWeight: "700" }}
          >
            <Dropdown.Item href="#/action-1">Shop cart</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Checkout</Dropdown.Item>
          </DropdownButton>
          <li className="icon">Content</li>
        </ul>
        <div className="second-icon">
          <ul>
            <li className="icon">Login</li>
            <li className="icon">Regrister</li>
          </ul>
        </div>
      </div>
    </>
  );
}
