import { Link } from "react-router-dom";
// import { Auth } from "../Admin/Authentications";

export default function Footer() {
  // const auth = Auth()
  return (
    <>
      <div
        className="container-fluid text-light bg-dark py-3"
        style={{ background: "#14143e" }}
        id="footer"
      >
        <div className="container py-3">
          <div className="row my-auto">
            <div className="col-6 col-md ">
              <h5>Features</h5>
              <ul className="list-unstyled text-small">
                <li>
                  <Link  to="/welcome">Expertise in accounting </Link>
                </li>
                <li>
                  <Link to="/audit-assurance">Auditing & taxation</Link>
                </li>
                <li>
                  <Link to='/team'>Certified professionals</Link>
                </li>
                <li>
                  <Link to='/direct-indirect'>Optimized tax benefits</Link>
                </li>
             
                <li>
                  <Link to='/direct-indirect'>Try our tax Calculator</Link>
                </li>
                <li>
                  <Link to='/direct-indirect'>Customized book-keeping</Link>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md">
              <h5>External Links</h5>
              <ul className="list-unstyled text-small">
                <li>
                  <a
                    className=""
                    href="https://incometaxindia.gov.in/Pages/communications/notifications.aspx"
                    target="_blanck"
                  >
                    Income tax
                  </a>
                </li>
                <li>
                  <a
                    className=""
                    href="https://www.cbic.gov.in/entities/view-sticker"
                    target="_blanck"
                  >
                    CBIT notifications
                  </a>
                </li>
                <li>
                  <a
                    className=""
                    href="https://incometaxindia.gov.in/pages/communications/index.aspx"
                    target="_blanck"
                  >
                    CBDT notifications
                  </a>
                </li>
                <li>
                  <a
                    className=""
                    href="https://www.gst.gov.in/"
                    target="_blanck"
                  >
                    GST notifications
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md">
              <h5>About</h5>
              <ul className="list-unstyled text-small">
                {/* { !auth.admin &&
                  <li>
                  <Link className="" to="/login">
                    Admin
                  </Link>
                </li>
                } */}
                <li>
                  <Link className="" to="/welcome">
                    K V N B & Co.
                  </Link>
                </li>
                <li>
                  <Link className="" to="/team">
                    Team
                  </Link>
                </li>

                <li>
                  <Link className="" to="/contact">
                    Contact
                  </Link>
                </li>
                <li>
                  <a className="" href="#map">
                    Location
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="container">
            <div className="row my-3">
              <div className="d-flex justify-content-center">
                <span className="mx-3 h4">
                  <a>
                    <i className="bi bi-instagram"></i>
                  </a>
                </span>
                <span className="mx-3 h4">
                  <a>
                    <i className="bi bi-facebook"></i>
                  </a>
                </span>
                <span className="mx-3 h4">
                  <a>
                    <i className="bi bi-whatsapp"></i>
                  </a>
                </span>
                <span className="mx-3 h4">
                  <a>
                    <i className="bi bi-phone"></i>
                  </a>
                </span>
                <span className="mx-3 h4">
                  <a>
                    <i className="bi bi-twitter"></i>
                  </a>
                </span>
              </div>
            </div>
            {/* <p className="float-right"><a href="#">Back to top</a></p> */}
            <p className="text-center">
              &copy; K V N B & Co. - 2023 All rights reserved.
              
            </p>
            <p className="text-center">
              Designed by{" "}
              <a href="https://yamakalyan3120.web.app" target="_blanck">
                Yama kalyan
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
