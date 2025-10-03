"use client";
import { CiLocationOn } from "react-icons/ci";
import { FaEnvelope } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
export default function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="first-column">
          <div className="title">
            <h1>
              <span>E</span>Shopper
            </h1>
          </div>
          <p>
            Dolore erat dolor sit lorem vero amet. Sed sit lorem magna, ipsum no
            sit erat lorem et magna ipsum dolore amet erat.
          </p>
          <div className="location">
            <CiLocationOn
              style={{ color: "#D19C97", marginLeft: "5px", cursor: "pointer" }}
            />
            <span style={{ padding: "10px" }}>123 Street, New York, USA</span>
          </div>
          <div className="location">
            <FaEnvelope
              style={{ color: "#D19C97", marginLeft: "5px", cursor: "pointer" }}
            />
            <span style={{ padding: "10px" }}>info@example.com</span>
          </div>
          <div className="location">
            <BsFillTelephoneFill
              style={{ color: "#D19C97", marginLeft: "5px", cursor: "pointer" }}
            />
            <span style={{ padding: "10px" }}>+1234567890</span>
          </div>
        </div>
        <div className="second-column">
          <h4>Quick Links</h4>
          <div className="second-side">
            <IoIosArrowForward />
            <span>Home</span>
          </div>
          <div className="second-side">
            <IoIosArrowForward />
            <span>Ourshop</span>
          </div>
          <div className="second-side">
            <IoIosArrowForward />
            <span>Shop Details</span>
          </div>
          <div className="second-side">
            <IoIosArrowForward />
            <span>Shopping cart</span>
          </div>
          <div className="second-side">
            <IoIosArrowForward />
            <span>Check out</span>
          </div>
          <div className="second-side">
            <IoIosArrowForward />
            <span>Contact us</span>
          </div>
        </div>
        <div className="third-column">
          <h4>Quick Links</h4>
          <div className="second-side">
            <IoIosArrowForward />
            <span>Home</span>
          </div>
          <div className="second-side">
            <IoIosArrowForward />
            <span>Ourshop</span>
          </div>
          <div className="second-side">
            <IoIosArrowForward />
            <span>Shop Details</span>
          </div>
          <div className="second-side">
            <IoIosArrowForward />
            <span>Shopping cart</span>
          </div>
          <div className="second-side">
            <IoIosArrowForward />
            <span>Check out</span>
          </div>
          <div className="second-side">
            <IoIosArrowForward />
            <span>Contact us</span>
          </div>
        </div>
        <div className="new-sletter">
          <h4>Newsletter</h4>
          <div
            className="form-input"
            style={{ padding: "10px", margin: "10px" }}
          >
            <Form>
              <Row className="mb-3">
                <div className="data-input">
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Control
                      type="email"
                      placeholder="Your name"
                      style={{
                        marginTop: "10px",
                        width: "300px",
                        outline: "none",
                      }}
                    />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Control
                      type="password"
                      placeholder="Your email"
                      style={{
                        marginTop: "10px",
                        width: "300px",
                        outline: "none",
                      }}
                    />
                  </Form.Group>
                </div>
              </Row>
              <Button
                variant="primary"
                type="submit"
                style={{
                  width: "100%",
                  backgroundColor: "#D19C97",
                  border: "none",
                }}
              >
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}
