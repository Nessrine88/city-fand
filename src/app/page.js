import Nav from "@/components/Nav";
import S1Home from "@/pages/page1/S1Home";
import StatisticBoxes from "@/pages/page1/S3StatisticBoxes";
import Map from "@/pages/page1/Map";
import Measure from "@/pages/page1/S2Measure";
import FundsDetail from "@/pages/page1/FundsDetail";
import Liquidity from "@/pages/page1/Liquidity";
import Faqs from "@/pages/page1/Faqs";
import Footer from "@/pages/page1/Footer";

export default function App() {
  return (
    <div className="App">
<Nav />
<S1Home />
<StatisticBoxes />
<Map />
<Measure />
<FundsDetail />
<Liquidity />
<Faqs />
<Footer />
    </div>
  );
}
