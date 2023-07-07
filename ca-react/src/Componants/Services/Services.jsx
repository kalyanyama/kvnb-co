import { Link } from "react-router-dom";

export default function Services() {
  return (
    <div
      className="container-fluid"
      style={{ background: "#4379c6" }}
      id="services"
    >
      <div className="container">
        <section id="services" className="services">
          <div className="container" data-aos="fade-up">
            <div className="section-header text-light">
              {/* <h5 className="text-primary">Services</h5> */}
              <h1 className="font-weight-bold display-3 text-light">
                <span className="text-light">Services</span> we do
              </h1>
              <p className="text-light">
                We provide comprehensive tax services, including tax planning,
                preparation, and consulting, to help you navigate your tax
                obligations efficiently.
              </p>
            </div>

            <div className="row gy-4" data-aos="fade-up" data-aos-delay="100">
              <div className="col-lg-4 col-md-6">
                <div className="service-item  position-relative">
                  <div className="icon">
                    <i className="bi bi-activity"></i>
                  </div>
                  <h3>AUDIT & ASSURANCE</h3>
                  <p>
                    Audit and Assurance: Trustworthy scrutiny, delivering
                    confidence in financial integrity and operational
                    excellence.
                  </p>
                  <Link to="/audit-assurance" className="readmore stretched-link">
                    Read more <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="service-item position-relative">
                  <div className="icon">
                    <i className="bi bi-broadcast"></i>
                  </div>
                  <h3>DIRECT & INDIRECT TAXES</h3>
                  <p>
                    Your trusted partner for expert tax solutions: Direct and
                    indirect tax services tailored for your business
                  </p>
                  <Link to="/direct-indirect" className="readmore stretched-link">
                    Read more <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="service-item position-relative">
                  <div className="icon">
                    <i className="bi bi-calculator"></i>
                  </div>
                  <h3>TAX CALCULATOR </h3>
                  <br />
                  <p>
                  Try our Tax Calculator! To estimate your taxes.
                  </p>
                  <Link to="/calculator" className="readmore stretched-link">
                    check tax <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="service-item position-relative">
                  <div className="icon">
                    <i className="bi bi-bounding-box-circles"></i>
                  </div>
                  <h3>NRI TAX COMPLIANCES</h3>
                  <p>
                    NRI Tax Compliance Experts: Ensuring smooth and hassle-free
                    tax obligations for Non-Resident Indians (NRIs).
                  </p>
                  <Link to="/nri" className="readmore stretched-link">
                    Read more <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="service-item position-relative">
                  <div className="icon">
                    <i className="bi bi-easel"></i>
                  </div>
                  <h3>BUSINESS STARTUP & ESTABLISHMENT SERVICES</h3>
                  <p>
                    Unlock Your Business Potential: Comprehensive Startup &
                    Establishment Services for Building and Scaling Successful
                    Ventures.
                  </p>
                  <Link to="/business-startup" className="readmore stretched-link">
                    Read more <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="service-item position-relative">
                  <div className="icon">
                    <i className="bi bi-calendar4-week"></i>
                  </div>
                  <h3>BOOK KEEPING SERVICES</h3>
                  <p>
                    Accurate and Reliable Bookkeeping Solutions: Keeping your
                    financial records in order with precision and expertise.
                  </p>
                  <Link to="/book-keeping" className="readmore stretched-link">
                    Read more <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
