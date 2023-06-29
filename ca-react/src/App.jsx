import './App.css'
import Contact from './Componants/Contact/Contact'
import Footer from './Componants/Footer/Footer'
import Home from './Componants/Home/Home'
// import About from './Componants/Info/About'
import WhyUs from './Componants/Info/WhyUs'
// import Clientss from './Componants/Info/Clientss'
import Header from './Componants/Navbar/Header'
// import Services from './Componants/Services/Services'
// import Testimonials from './Componants/Testimonials/Testimonials'
// import Team from './Componants/team/Team'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ServicesFull from './Componants/Services/ServicesFull'
// import TeamFull from './Componants/team/TeamFull'
import TestimonialsFull from './Componants/Testimonials/TestimonialsFull'
import ScrollBtn from './Componants/Scroll/ScrollBtn'
import Clientss from './Componants/Info/Clientss'
// import News from './Componants/news/news'
import Calculator from './Componants/Calculator/Calculator'


function App() {
  return (
    <div className='main'>
    <BrowserRouter>
      <Header/>
      {/* <Services/> */}
      {/* <About/> */}
      {/* <Clientss/> */}
      {/* <Testimonials/> */}
      {/* <Team/> */}
      {/* <Contact/> */}
      {/* <Home/> */}
    <Routes>

      <Route path='/' element={<Home/>}/>
      <Route path='/whyus' element={<WhyUs />}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/services' element={<ServicesFull />}/>
      {/* <Route path='/team' element={<TeamFull />}/> */}
      <Route path='/testimonials' element={<TestimonialsFull />}/>
      <Route path='/clients' element={<Clientss />}/>
      {/* <Route path='/news' element={<News />}/> */}
      <Route path='/calculator' element={<Calculator />}/>
      
    </Routes>
    <ScrollBtn/>
      <Footer/>
    </BrowserRouter>
    </div>
  )
}

export default App
