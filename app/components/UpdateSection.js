"use client";
import Title from "./Title";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
export default function UpdateSection() {
  return (
    <>
      <div className="update-container">
        <Title text="Stay Updated" />
        <div className="update-section">
          <p className="text-section">
            Amet lorem at rebum amet dolores. Elitr lorem dolor sed amet diam
            labore at justo ipsum eirmod duo labore labore.
          </p>
          <div className="input-section">
            <InputGroup className="mb-3">
              <Form
                placeholder="Email goes here"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <InputGroup.Text id="basic-addon2" className="input-button">
                Subscripe
              </InputGroup.Text>
            </InputGroup>
          </div>
        </div>
      </div>
    </>
  );
}
