import { Navbar } from "./Components/Navbar/Navbar";
import { Intro } from "./Components/Intro/Intro";
import './App.css'
import Services from "./Components/Services/Services";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";
import BackendSkills from "./Components/BackendSkills/BackendSkills";
import Footer from "./Components/Footer/Footer";
import { themeContext } from "./Context";
import {useContext} from 'react';


function App() {

  const theme = useContext(themeContext);
  const darkMode =  theme.state.darkMode;
  return (
    <div className="App"
       
     style={{
       background: darkMode ? 'var(--dark)':'',
       color:darkMode ? 'white':''
     }}
    
    >
      <Navbar/>
      <Intro/>
      <Services/>
      <BackendSkills/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
