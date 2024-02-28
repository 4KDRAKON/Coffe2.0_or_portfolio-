import React from 'react';
import './App.scss';
import '../src/Components/Page/About/about.scss'
// import { Header } from './Components/Page/Home/header/header';
// import { Section } from './Components/Page/Home/Section/section';
// import { Section2 } from './Components/Page/Home/section2/section';
// import { Section3 } from './Components/Page/Home/section3/section3';
// import { Section4 } from './Components/Page/Home/section4/section4';
// import { Footer } from './Components/Page/Home/footer/footer';
import { Routes,Route } from "react-router-dom";
import { Home } from './Components/Page/Home/home';
import { About } from './Components/Page/About/about';
import { Error } from './Components/Page/Error/error';
function App() {
  return (
   <>
  {/* <Header />
  <Section />
  <Section2 />
  <Section3 />
  <Section4 />
  <Footer /> */}

  

 
    <Routes>
      <Route path="" element={<Home />}/>
      <Route path="Home" element={<Home />}/>
      <Route path="About" element={<About />}/>
      <Route path="*" element={<Error />}/>

 
      </Routes>



   </>
  );
}

export default App;
