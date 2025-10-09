import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Link from "next/link";
import FilterPrice from "./components/FilterPrice";
import SearchRow from "./components/SearchRow";
import TrendySection from "../components/TrendySection";
import ShopButtons from "./components/ShopButtons";
import Footer from "../components/Footer";
export default function Shop() {
  return (
    <>
      <Container fluid className="min-vh-100">
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
                <h1 style={{ fontWeight: "bold" }}> Our Shop</h1>
                <Link href="/">
                  <button className="home-btn">Home</button>
                </Link>
              </div>
              {/* </Col>
              <Col style={{ flex: 1 }}> */}
            </Col>
          </Row>
        </Row>
      </Container>

      <Container fluid className="min-vh-100">
        <Row>
          <Row xs={1} md={2}>
            <Col
              className="first-section"
              md={2}
              style={{ flex: 1, marginTop: "-282px;" }}
            >
              <FilterPrice />
            </Col>
            <Col md={10}>
              <div className="shop-search" style={{ marginTop: "-282px;" }}>
                <SearchRow />
                <TrendySection dataUrl="/Trend.json" />
              </div>
            </Col>
          </Row>
        </Row>
        <ShopButtons />
        <Footer />
      </Container>
    </>
  );
}
