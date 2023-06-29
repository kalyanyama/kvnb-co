import { useEffect, useState } from "react"
import "../Navbar/Header.css"
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom"

export default function Header() {
  const [active, setActive] = useState(false)
  const [bgChangeHeader, setBgChangeHeader] = useState("bg-header")
  const [bgChangeNav, setBgChangeNav] = useState("next-header")

  const {pathname} = useLocation()
  const navigator = useNavigate()
  
  const handleScroolNav =()=>{
     window.scrollY > 0 ? (setActive(true), setBgChangeHeader("next-header"), setBgChangeNav("bg-header")) :
      (setActive(false), setBgChangeHeader("bg-header"), setBgChangeNav("next-header"))
  }

  useEffect(()=>{
    window.addEventListener("scroll", handleScroolNav)
    return ()=> window.removeEventListener("scroll", handleScroolNav)
  },[])

  return (
    <div className="container">
      <header className="d-flex flex-column  fixed-top" id="header">
  <nav className={
   pathname === "/" ? `navbar navbar-expand-lg ${bgChangeHeader} border-bottom navbar-light p-3` 
   : "navbar navbar-expand-lg bg-light border-bottom navbar-light p-3"
}>
        <div className="container">
    <Link className="navbar-brand" to="/" ><img src="/imgs/logo.png" width="60px" className="mx-3" />K V N B & CO</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarCollapse">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item ">
          <NavLink className="nav-link" to="/" >Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/services" >Services</NavLink>
        </li>
        {/* <li className="nav-item">
        <NavLink className="nav-link" to="/whyus">Why us</NavLink>

        </li> */}
        {/* <li className="nav-item">
          <NavLink className="nav-link" to="/team" >Team</NavLink>
        </li> */}
        {/* <li className="nav-item">
          <NavLink className="nav-link" to="/clients" >Clients</NavLink>
        </li> */}
        <li className="nav-item">
          <NavLink className="nav-link" to="/testimonials" >Testimonials</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/calculator" >Calculator</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact" >Contact</NavLink>
        </li>
      </ul>
      <div>
        <button className="btn btn-outline-success mx-3" onClick={()=>navigator("/contact")}>Lets talk ?</button>
        {/* <button className="btn btn-primary">Login</button> */}
      </div>
    </div>
        </div>
  </nav>
  {/* Below navbar */}
  {
    active  && pathname === "/" &&
  <div className={`container-fluid ${bgChangeNav} below-nav`}>
  <div className="container">
  <nav className={`navbar navbar-expand-lg ${bgChangeNav} p-0`}>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item mx-5">
        <a className="nav-link" href="#services">Services</a>
      </li>
      <li className="nav-item mx-5">
        <a className="nav-link" href="#about">Why choose us</a>
      </li>
      {/* <li className="nav-item mx-5">
        <a className="nav-link" href="#clients">clients</a>
      </li> */}
      <li className="nav-item mx-5">
        <a className="nav-link" href="#testimonials">Testimonials</a>
      </li>
      <li className="nav-item mx-5">
        <a className="nav-link" href="#team">Team</a>
      </li>
      <li className="nav-item mx-5">
        <a className="nav-link" href="#news">News</a>
      </li>
      <li className="nav-item mx-5">
        <a className="nav-link" href="#map">Location</a>
      </li>
      <li className="nav-item mx-5">
        <a className="nav-link" href="#contact">Consult</a>
      </li>
    </ul>
  </div>
</nav>
</div>
</div>
  }

</header>
    </div>
  )
}
