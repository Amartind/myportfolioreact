import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
// import Navbar from './component/Navbar';
import Aboutme from './page/Aboutme';
import Portfolio from './component/Portfolio'
import Header from './component/Header';
// import Projects from './component/Projects';
import Footer from './component/Footer';
import Contactme from './page/Contact';
import Resume from './page/Resume';


function App() {
  return (
    <BrowserRouter>
      <Header/>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@300&display=swap" rel="stylesheet"/>  
      <Link href="/dist/output.css" rel="stylesheet"/>
      <Routes>
        <Route path="/" element={<Aboutme/>}/>
        <Route path="/aboutme" element={<Aboutme/>}/>
        <Route path="/portfolio" element={<Portfolio/>}/>
        <Route path="/contact" element={<Contactme/>}/>
        <Route path="/resume" element={<Resume/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
