import BrowserFeature from "./Components/BrowserFeature";
import Caurosel from "./Components/Caurosel";
import Destination from "./Components/Destination";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import RealWedding from "./Components/RealWedding";
import ToolsAndPlanning from "./Components/ToolsAndPlanning";
import WeddingInsurance from "./Components/WeddingInsurance";

export default function Home() {
  return (
    <>
      <Navbar />
      <Caurosel />
      <BrowserFeature />
      <ToolsAndPlanning />
      <RealWedding />
      <WeddingInsurance />
      <Destination />
      <Footer />
    </>
  )
}
