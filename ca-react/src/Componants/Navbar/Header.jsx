import { useEffect, useState } from "react"
import "../Navbar/Header.css"
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom"
import { Auth } from "../Admin/Authentications"

export default function Header() {
  const [active, setActive] = useState(false)
  const [bgChangeHeader, setBgChangeHeader] = useState("bg-header")
  const [bgChangeNav, setBgChangeNav] = useState("next-header")

  const {pathname} = useLocation()
  const navigator = useNavigate()
  const auth = Auth()
  
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
        {
          auth.admin &&
        <li className="nav-item ">
          <NavLink className="nav-link" to="/dashboard" >Dashboard</NavLink>
        </li>
        }
        <li className="nav-item dropdown hover">
        <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
          About us
        </a>
        <ul className="dropdown-menu">
          <li><Link className="dropdown-item" to="/welcome">Company</Link></li>
          <li><Link className="dropdown-item" to="/team">Our team</Link></li>
        </ul>
      </li>
        <li className="nav-item dropdown hover">
        <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
          Services
        </a>
        <ul className="dropdown-menu">
          <li><Link className="dropdown-item" to="/audit-assurance">Audit & Assurance</Link></li>
          <li><Link className="dropdown-item" to="/direct-indirect">Direct & Indirect taxes</Link></li>
          <li><Link className="dropdown-item" to="/nri">NRI compliances</Link></li>
          <li><Link className="dropdown-item" to="/accounts">Accounts outsourcing</Link></li>
          <li><Link className="dropdown-item" to="/business-startup">Business Establishment</Link></li>
          <li><Link className="dropdown-item" to="/book-keeping">Book keeping</Link></li>
          <li><hr className="dropdown-divider"/></li>
          <li><Link className="dropdown-item" to="/services">All Services</Link></li>
        </ul>
      </li>
      
        {/* <li className="nav-item">
        <NavLink className="nav-link" to="/whyus">Why us</NavLink>

        </li> */}
        {/* <li className="nav-item">
          <NavLink className="nav-link" to="/clients" >Clients</NavLink>
        </li> */}
       
        {/* <li className="nav-item">
          <NavLink className="nav-link" to="/calculator" >Calculator</NavLink>
        </li> */}
        <li className="nav-item">
          <NavLink className="nav-link" to="/news" >News</NavLink>
        </li>
        <li className="nav-item dropdown hover">
        <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
          Reviews
        </a>
        <ul className="dropdown-menu">
          <li><Link className="dropdown-item" to="/testimonials">People</Link></li>
          {/* <li><Link className="dropdown-item" to="/clients">Our Clients</Link></li> */}
        </ul>
      </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact" >Contact</NavLink>
        </li>
      </ul>
      <div>
        {
          auth.admin?
          <button className="btn btn-outline-success mx-3" onClick={()=>{
            localStorage.removeItem("token")
            navigator('/')
            window.location.reload(false)
          }}>Log-out</button>
          :
          ""
        }
        {/* <button className="btn btn-primary">Login</button> */}
      </div>
    </div>
        </div>
  </nav>
  {/* Below navbar */}
  {
    active  && pathname === "/" &&
  <div className={`container-fluid ${bgChangeNav} border-bottom below-nav`}>
  <div className="container">
  <nav className={`navbar navbar-expand-lg ${bgChangeNav}   p-0`}>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav d-flex justify-content-between">
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
      {/* <li className="nav-item mx-5">
        <a className="nav-link" href="#team">Team</a>
      </li> */}
      {/* <li className="nav-item mx-5">
        <a className="nav-link" href="#news">News</a>
      </li> */}
      <li className="nav-item mx-5">
        <a className="nav-link" href="#map">Location</a>
      </li>
      <li className="nav-item mx-5">
        <a className="nav-link" href="#contact">Consult</a>
      </li>
      <li className="nav-item mx-5">
        <a className="nav-link" href="#footer">Links</a>
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
