import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <>
      <div
        className="container-fluid text-light py-3"
        style={{ background: "#14143e" }}
      >
        <div className="container py-3">
          <div className="row my-auto">
            <div className="col-6 col-md ">
              <h5>Features</h5>
              <ul className="list-unstyled text-small">
                <li>
                  <a className="">Expertise in accounting </a>
                </li>
                <li>
                  <a className="">Auditing & taxation</a>
                </li>
                <li>
                  <a className="">Certified professionals</a>
                </li>
                <li>
                  <a className="">Optimized tax benefits</a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md">
              <h5>Links</h5>
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
                <li>
                  <a className="" href="#team">
                    Team
                  </a>
                </li>
                <li>
                  <a className="" href="#map">
                    Location
                  </a>
                </li>
                <li>
                  <a className="" href="#">
                    Privacy
                  </a>
                </li>
                <li>
                  <a className="" href="#">
                    Terms
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
              &copy; 2023 K V N B & CO.
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