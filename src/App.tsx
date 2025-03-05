import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './components/navbar'
import './index.css'
import Home from './components/home';
import Skills from './components/skills';
import Projects from './components/projects';
import Contact from './components/contact'
import Footer from './components/footer';
import About from './components/about';


function App() {

  return (
    <>
      <div className="container-fluid pb-5">
      <Router>
        <div className="row header-row mb-10">
          <div className="col-md-5 offset-1">
            <h1 className='text-5xl mt-3 text-purple-800 pb-1'>Anjaneyulu Appikatla</h1>
          </div>
          <div className="col-md-6">
            <Navbar />
          </div>
        </div>
        
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
      </div>

      <Footer />

      


   


    </>
  )
}



export default App
