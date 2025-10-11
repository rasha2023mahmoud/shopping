"use client";
import { useState } from "react";
import {
  Card,
  Row,
  Col,
  Container,
  Form,
  Button
} from "react-bootstrap";
import { IoStarSharp } from "react-icons/io5";
import { RiStarSLine } from "react-icons/ri";

export default function AccordianParagraph() {
  const [active, setActive] = useState(null);
  const sections = [
    {
      id: 1,
      title: "Description",
      content:
        "Eos no lorem eirmod diam diam, eos elitr et gubergren diam sea. Consetetur vero aliquyam invidunt duo dolores et duo sit. Vero diam ea vero et dolore rebum, dolor rebum eirmod consetetur invidunt sed sed et, lorem duo et eos elitr, sadipscing kasd ipsum rebum diam. Dolore diam stet rebum sed tempor kasd eirmod. Takimata kasd ipsum accusam sadipscing, eos dolores sit no ut diam consetetur duo justo est, sit sanctus diam tempor aliquyam eirmod nonumy rebum dolor accusam, ipsum kasd eos consetetur at sit rebum, diam kasd invidunt tempor lorem, ipsum lorem elitr sanctus eirmod takimata dolor ea invidunt Dolore magna est eirmod sanctus dolor, amet diam et eirmod et ipsum. Amet dolore tempor consetetur sed lorem dolor sit lorem tempor. Gubergren amet amet labore sadipscing clita clita diam clita. Sea amet et sed ipsum lorem elitr et, amet et labore voluptua sit rebum. Ea erat sed et diam takimata sed justo. Magna takimata justo et amet magna et..",
    },
    {
      id: 2,
      title: "Information",
      content:
        "Eos no lorem eirmod diam diam, eos elitr et gubergren diam sea. Consetetur vero aliquyam invidunt duo dolores et duo sit. Vero diam ea vero et dolore rebum, dolor rebum eirmod consetetur invidunt sed sed et, lorem duo et eos elitr, sadipscing kasd ipsum rebum diam. Dolore diam stet rebum sed tempor kasd eirmod. Takimata kasd ipsum accusam sadipscing, eos dolores sit no ut diam consetetur duo justo est, sit sanctus diam tempor aliquyam eirmod nonumy rebum dolor accusam, ipsum kasd eos consetetur at sit rebum, diam kasd invidunt tempor lorem, ipsum lorem elitr sanctus eirmod takimata dolor ea invidunt Dolore magna est eirmod sanctus dolor, amet diam et eirmod et ipsum. Amet dolore tempor consetetur sed lorem dolor sit lorem tempor. Gubergren amet amet labore sadipscing clita clita diam clita. Sea amet et sed ipsum lorem elitr et, amet et labore voluptua sit rebum. Ea erat sed et diam takimata sed justo. Magna takimata justo et amet magna et..",
      details: (
        <div className="information">
          <div className="data-inform">
            <p>Sit erat duo lorem duo ea consetetur, et eirmod takimata.</p>
            <p>Amet kasd gubergren sit sanctus et lorem eos sadipscing at.</p>
            <p>Duo amet accusam eirmod nonumy stet et et stet eirmod..</p>
            <p>
              Takimata ea clita labore amet ipsum erat justo voluptua. Nonumy.
            </p>
          </div>
          <div className="data-inform">
            <p>Sit erat duo lorem duo ea consetetur, et eirmod takimata.</p>
            <p>Amet kasd gubergren sit sanctus et lorem eos sadipscing at.</p>
            <p>Duo amet accusam eirmod nonumy stet et et stet eirmod..</p>
            <p>
              Takimata ea clita labore amet ipsum erat justo voluptua. Nonumy.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      title: "Review",
      content:
        "Eos no lorem eirmod diam diam, eos elitr et gubergren diam sea. Consetetur vero aliquyam invidunt duo dolores et duo sit. Vero diam ea vero et dolore rebum, dolor rebum eirmod consetetur invidunt sed sed et, lorem duo et eos elitr, sadipscing kasd ipsum rebum diam. Dolore diam stet rebum sed tempor kasd eirmod. Takimata kasd ipsum accusam sadipscing, eos dolores sit no ut diam consetetur duo justo est, sit sanctus diam tempor aliquyam eirmod nonumy rebum dolor accusam, ipsum kasd eos consetetur at sit rebum, diam kasd invidunt tempor lorem, ipsum lorem elitr sanctus eirmod takimata dolor ea invidunt Dolore magna est eirmod sanctus dolor, amet diam et eirmod et ipsum. Amet dolore tempor consetetur sed lorem dolor sit lorem tempor. Gubergren amet amet labore sadipscing clita clita diam clita. Sea amet et sed ipsum lorem elitr et, amet et labore voluptua sit rebum. Ea erat sed et diam takimata sed justo. Magna takimata justo et amet magna et..",
      Review: (
        <div className="review">
          <div className="left-side">
            <h4>1 review for "Colorful Stylish Shirt"</h4>
            <p>John Doe - 01 Jan 2045</p>
            <IoStarSharp style={{ color: "#D19C97" }} />
            <IoStarSharp style={{ color: "#D19C97" }} />
            <IoStarSharp style={{ color: "" }} />
            <div className="right-side">
              <h4>Leave a review</h4>
              <p>
                Your email address will not be published. Required fields are
                marked *
              </p>
              <span>
                Your Rating * :
                <RiStarSLine />
                <RiStarSLine />
                <RiStarSLine />
                <RiStarSLine />
                <RiStarSLine />
              </span>
              <Form>
                <Form.Group>
                  <Form.Control type="text" placeholder=" Your Review" />
                </Form.Group>
                <Form.Group>
                  <Form.Control type="text" placeholder=" Your Name" />
                </Form.Group>
                <Form.Group>
                  <Form.Control type="text" placeholder=" Your Email" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Leave your reviwe
                </Button>
              </Form>
            </div>
          </div>
        </div>
      ),
    },
  ];
  return (
    <Container className="accordian-container">
      <Row className="text-center">
        <Col>
          {sections.map((section) => {
            return (
              <Col md={4} className="" key={section.id}>
                <Card
                  style={{
                    cursor: "pointer",
                    position: active === section.id ? "relative" : "static",
                    zIndex: active === section.id ? 1 : 10,
                    transform:
                      active === section.id
                        ? "scale(1.05) translate y(-10)"
                        : "scale(1)",
                    opacity: active && active !== section.id ? 0 : 1,
                    transition: "all 0.5s ease",
                  }}
                  onClick={() =>
                    setActive(active === section.id ? null : section.id)
                  }
                >
                  <Card.Title>{section.title}</Card.Title>
                  {active === section.id && (
                    <Card.Text>{section.content}</Card.Text>
                  )}
                </Card>
              </Col>
            );
          })}
        </Col>
      </Row>
    </Container>
  );
}
