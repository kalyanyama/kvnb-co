import "./App.css";
import Contact from "./Componants/Contact/Contact";
import Footer from "./Componants/Footer/Footer";
import Home from "./Componants/Home/Home";
// import About from './Componants/Info/About'
import WhyUs from "./Componants/Info/WhyUs";
// import Clientss from './Componants/Info/Clientss'
import Header from "./Componants/Navbar/Header";
// import Services from './Componants/Services/Services'
// import Testimonials from './Componants/Testimonials/Testimonials'
// import Team from './Componants/team/Team'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Clientss from "./Componants/Info/Clientss";
import News from "./Componants/news/News";
import ScrollBtn from "./Componants/Scroll/ScrollBtn";
import ServicesFull from "./Componants/Services/ServicesFull";
import TeamFull from "./Componants/team/TeamFull";
import Welcome from "./Componants/welcome/Welcome";

import Accounts from "./Componants/Services/sub-folders/Accounts";
import Audit from "./Componants/Services/sub-folders/Audit";
import Book from "./Componants/Services/sub-folders/Book";
import Business from "./Componants/Services/sub-folders/Business";
import DITaxes from "./Componants/Services/sub-folders/DITaxes";
import Nri from "./Componants/Services/sub-folders/Nri";

// import Login from "./Componants/Admin/Login";
// import Dashboard from "./Componants/Admin/Dashboard";
// import Calculated from "./Componants/Admin/Calculated";
// import Contacted from "./Componants/Admin/Contacted";
// import { Authentications } from "./Componants/Admin/Authentications";
// import { AuthCheckAdmin } from "./Componants/Admin/Authcheck";

function App() {
  return (
    <div className="main">
      <BrowserRouter>
        {/* <Authentications> */}
        <Header />
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/whyus" element={<WhyUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<ServicesFull />} />
          <Route path="/team" element={<TeamFull />} />
          <Route path="/clients" element={<Clientss />} />
          <Route path="/news" element={<News />} />
          {/* <Route path="/calculator" element={<Calculator />} /> */}

          <Route path="/audit-assurance" element={<Audit />} />
          <Route path="/book-keeping" element={<Book />} />
          <Route path="/business-startup" element={<Business />} />
          <Route path="/accounts" element={<Accounts />} />
          <Route path="/direct-indirect" element={<DITaxes />} />
          <Route path="/nri" element={<Nri />} />

          <Route path="/welcome" element={<Welcome />} />

          {/* <Route path="/login" element={<Login />} /> */}

          {/* <Route
              path="/dashboard"
              element={
                <AuthCheckAdmin>
                  <Dashboard />
                </AuthCheckAdmin>
              }
            >
              <Route
                index
                element={
                  <AuthCheckAdmin>
                    <Contacted />
                  </AuthCheckAdmin>
                }
              />
              <Route
                path="/dashboard/calculated"
                element={
                  <AuthCheckAdmin>
                    <Calculated />
                  </AuthCheckAdmin>
                }
              />
            </Route> */}
        </Routes>
        <ScrollBtn />
        <Footer />
        {/* </Authentications> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
