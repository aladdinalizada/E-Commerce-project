import "./App.css";
import CardsPropation from "./components/cards/cards";
import CountdownTimer from "./components/countdown-timer";
import Hero from "./components/introduction/hero";
import SliderBottom from "./components/silder-bottom";
import CategorySlider from "./components/slider";
import TopProducts from "./components/top-categories";
import TopHedaer from "./components/top-header/topHedaer";
import Header from "./layouts/header/header";

function App() {
  return (
    <div className="App">
      <TopHedaer />
      <Header />
      <Hero />
      <CardsPropation />
      <CategorySlider/>
      <SliderBottom/>
      <TopProducts/>
      <CountdownTimer/>
    </div>
  );
}

export default App;
