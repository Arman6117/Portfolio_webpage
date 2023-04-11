import { Navbar } from "./Components/Navbar/Navbar";
import { Intro } from "./Components/Intro/Intro";
import './App.css'
import Services from "./Components/Services/Services";
import Portfolio from "./Components/Portfolio/Portfolio";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Services/>
      <Portfolio/>
    </div>
  );
}

export default App;
