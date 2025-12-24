import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import { Element } from 'react-scroll';
import About from './pages/About';
import Contact from './pages/Contact';
import Skills from './pages/Skills';
import Testimonals from './pages/Testimonals';
import Project from './pages/Project';
import Footer from './pages/Footer';
import Home from './pages/Home.jsx';
import { Toaster } from 'react-hot-toast';




function App() {
  return (
    <div className=' '>
     
    <Header />
   

  
    <Element  name='/'  >
      <Home   />
    </Element>
    
   <Element  name='about' >
      <About   />
    </Element>



 <Element name='skils' >
  <Skills />
</Element>
 

   <Element name='testimonals' >
  <Testimonals />
</Element>
   

<Element name='project' >
   <Project/>
</Element>



<Element name="contact">
        <Contact />
      </Element>

<Element name='footer'>
  <Footer/>
</Element> 


<Toaster position="top-right" />



 

    </div>
  );
}

export default App;
