
'use client'
import Form from 'react-bootstrap/Form';
import { Button } from "react-bootstrap";
import { CiLocationOn } from "react-icons/ci";
import { FaEnvelope } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
export default function Contacts(){
    return (
        <>
        <div className="contact-title">
            <h1>Contact For Any Queries</h1>
        </div>
       <div className='contact-continer'>
         <div className='text-form'>
         <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="email" placeholder="Your name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="email" placeholder="Your E.mail" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="email" placeholder="Subject" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" placeholder="Subject" rows={3} />
      </Form.Group>
      <Button style={{backgroundColor:"#D19C97", color: "black", fontWeight:"bold"}}>Send Message</Button>
        </Form>
        </div>
        <div className='text-contact'>
            <h3>Get In Touch</h3>
            <p style={{width: "500px", fontWeight:"bold"}}>Justo sed diam ut sed amet duo amet lorem amet stet sea ipsum, sed duo amet et. Est elitr dolor elitr erat sit sit. Dolor diam et erat clita ipsum justo sed.</p>
            <h3>Store 1</h3>
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
        <h3>Store 2</h3>
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
       </div>
        </>
    );
}
