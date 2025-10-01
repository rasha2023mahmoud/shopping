"use client";
import LogoTitle from "./LogoTitle";
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
          <LogoTitle TitleDetails="shopper" />
          <p>
            Dolore erat dolor sit lorem vero amet. Sed sit lorem magna, ipsum no
            sit erat lorem et magna ipsum dolore amet erat.
          </p>
          <div>
            <CiLocationOn />
            <span>123 Street, New York, USA</span>
          </div>
          <div>
            <FaEnvelope />
            info@example.com
          </div>
          <div>
            <BsFillTelephoneFill />
            +012 345 67890
          </div>
        </div>
        <div className="second-column">
          <h4>Quick Links</h4>
          <div>
            <span>Home</span>
            <IoIosArrowForward />
          </div>
          <div>
            <span>Ourshop</span>
            <IoIosArrowForward />
          </div>
          <div>
            <span>Shop Details</span>
            <IoIosArrowForward />
          </div>
          <div>
            <span>Shopping cart</span>
            <IoIosArrowForward />
          </div>
          <div>
            <span>Check out</span>
            <IoIosArrowForward />
          </div>
          <div>
            <span>Contact us</span>
            <IoIosArrowForward />
          </div>
        </div>
        <div className="third-column">
          <h4>Quick Links</h4>
          <div>
            <span>Home</span>
            <IoIosArrowForward />
          </div>
          <div>
            <span>Ourshop</span>
            <IoIosArrowForward />
          </div>
          <div>
            <span>Shop Details</span>
            <IoIosArrowForward />
          </div>
          <div>
            <span>Shopping cart</span>
            <IoIosArrowForward />
          </div>
          <div>
            <span>Check out</span>
            <IoIosArrowForward />
          </div>
          <div>
            <span>Contact us</span>
            <IoIosArrowForward />
          </div>
        </div>
        <div className="new-sletter">
          <h4>Newsletter</h4>
          <div>
            <Form>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Your name</Form.Label>
                  <Form.Control type="email" placeholder="Your name" />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Your email</Form.Label>
                  <Form.Control type="password" placeholder="Your email" />
                </Form.Group>
              </Row>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}
