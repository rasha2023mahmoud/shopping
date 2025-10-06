import ShowBar from "./components/ShowBar";
import Cataloge from "./components/Cataloge";
import Offer from "./components/Offer";
import Title from "./components/Title";
import TrendySection from "./components/TrendySection";
import Logo from "./components/Logo";
import Footer from "./components/Footer";
import Sliders from "./components/Sliders";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
export default function Home() {
  return (
    <main>
         <Container fluid className="min-vh-100">
          <Row>
      
            <Row xs={1} md={2}>
              <Col className="first-section" xs={12} md={4} lg={3}>
                
              </Col>
              <Col style={{ flex: 1 }}>
               <Sliders />
              </Col>
            </Row>
            
          </Row>
        </Container>
      <ShowBar />
      <Cataloge />
      <Offer />
      <Title text="Trandy Products" />
      <TrendySection dataUrl="/Trend.json" />
      <div style={{ marginTop: "65px" }}>
        <Title text="Just Arrived" />
        <TrendySection dataUrl="/Trend.json" />
        <Logo />
        <Footer />
      </div>
    </main>
  );
}
