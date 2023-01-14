import { Route, Routes } from "react-router-dom";
import "./App.css";
import CardsPropation from "./components/cards/cards";
import CountdownTimer from "./components/countdown-timer";
import Hero from "./components/introduction/hero";
import Details from "./components/product-details";
import ShopInstagram from "./components/shop-instagram";
import SliderBottom from "./components/silder-bottom";
import CategorySlider from "./components/slider";
import TopProducts from "./components/top-categories";
import TopHedaer from "./components/top-header/topHedaer";
import Footer from "./layouts/footer/footer";
import Header from "./layouts/header/header";

function App() {
  return (
    <div className="App">
      <TopHedaer />
      <Header />
      <Routes>
        <Route to="/" element="homepage"></Route>
        <Route to="/details" element={<Details/>}></Route>
      </Routes>
      <Hero />
      <CardsPropation />
      <CategorySlider/>
      <SliderBottom/>
      <TopProducts/>
      <CountdownTimer/>
      <ShopInstagram/>
      <Footer/>
    </div>
  );
}

export default App;
