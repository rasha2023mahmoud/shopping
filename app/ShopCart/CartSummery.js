"use client";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Button } from "react-bootstrap";

export default function CartSummery() {
  return (
    <>
      <div className="summery-container">
        <div className="main-card">
          <InputGroup>
            <InputGroup.Text
              className="coupon-btn"
              style={{
                fontWeight: "bold",
                cursor: "pointer",
                backgroundColor: "#D19C97",
                border: "none",
                outline: "none",
                color: "black",
              }}
            >
              Coupon code
            </InputGroup.Text>
            <Form.Control
              className="text-area"
              as="textarea"
              aria-label="Coupon code"
              placeholder="Coupon code"
            />
          </InputGroup>
        </div>
        <div className="summery-text">
          <div className="summery-title">
            <h2>Cart Summary</h2>
          </div>
          <div className="summery-price">
            <span>Subtotal</span>
            <span>150$</span>
          </div>
          <div className="summery-price">
            <span>Shipping</span>
            <span>10$</span>
          </div>
          <div className="summery-price">
            <span style={{ fontSize: "40px" }}>Total</span>
            <span style={{ fontSize: "40px" }}>160$</span>
          </div>
          <Button
            className="summery-btn"
            style={{
              width: "90%",
              backgroundColor: "#D19C97",
              border: "none",
              outline: "none",
              height: "50px",
              color: "black",
            }}
          >
            Proced To checkout
          </Button>
        </div>
      </div>
    </>
  );
}
