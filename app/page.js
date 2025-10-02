import ShowBar from "./components/ShowBar";
import Cataloge from "./components/Cataloge";
import Offer from "./components/Offer";
import Title from "./components/Title";
import TrendySection from "./components/TrendySection";
import Logo from "./components/Logo";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <main>
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
