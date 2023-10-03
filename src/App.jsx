import Boost from "./components/Boost";
import Footer from "./components/Footer";
import HandleURL from "./components/HandleURL";
import Header from "./components/Header";
import HeroSec from "./components/HeroSec";
import Stats from "./components/Stats";

function App() {
  return (
    <>
      <Header />
      <HeroSec />
      <HandleURL />
      <Stats />
      <Boost />
      <Footer />
    </>
  );
}

export default App;