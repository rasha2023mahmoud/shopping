import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Link from "next/link";
import Footer from "../components/Footer";
import BillingAddress from "./BillingAddress";
import OrderTotal from "./OrderTotal"
export default function CheckOut() {
  return (
    <>
      <Container fluid className="min-vh-90" style={{ marginBottom: "50px" }}>
        <Row>
          <Row xs={1} md={2}>
            <Col
              className="first-section"
              xs={12}
              md={4}
              lg={3}
              style={{ flex: 1 }}
            >
              <div
                className="shop-Title"
                style={{
                  width: "100%",
                  height: "400px",
                  backgroundColor: "#EDF1FF",
                }}
              >
                <h1 style={{ fontWeight: "bold" }}> Checkout</h1>
                <Link href="/">
                  <button className="home-btn">Home</button>
                </Link>
              </div>
              {/* </Col>
              <Col style={{ flex: 1 }}> */}
            </Col>
          </Row>
        </Row>
                <Container fluid className="min-vh-90 p-5">
              <div className="checkOut w-100" >
                  <BillingAddress style={{padding: "10px"}}/>
                  <OrderTotal/>
                </div>
                </Container>
        <Footer />
      </Container>
    </>
  );
}
