import Services from "../Services/Services";
// import Testimonials from "../Testimonials/Testimonials";
// import Team from "../team/Team";
import About from "../Info/About";
import Contact from "../Contact/Contact";
import Map from "../Footer/Map";
import "../Home/Home.css";
// import ClientHome from "../Info/ClientHome";
// import { useEffect, useState } from "react";
// import News from "../news/News";
import { useNavigate } from "react-router-dom";
import Company from "../welcome/Company";

export default function Home() {
  // const [article, setArticle] = useState([]);
  const navigator = useNavigate();

  return (
    <div id="home">
      {/* <div className="">
        <div className="row mt-5 pt-4">
          <div className="col-md-12 col-lg-12 heading-news">
            <div className="ul py-1">{mapping}</div>
          </div>
        </div>
      </div> */}

      <div className="home-main mt-5 py-5">
        <div className="content-home py-5">
          {/* <div className="container">
        <div className="row">
          <div className="col-md-5 col-lg-5 my-auto" data-aos="zoom-out">
            <div className="text-light">
              <h1 className="display-4">Expert Financial Guidance </h1>
              <hr />
              <p className="lead">
                Our charted accountant team brings extensive knowledge and
                expertise to guide you through complex financial challenges.
                From tax planning to financial analysis, we provide tailored
                solutions to optimize your financial performance.
              </p>
              <div className="my-4">
              <button className="btn btn-light mr-3" onClick={()=>navigator("/welcome")}>Learn more</button>
              <button className="btn btn-light" onClick={()=>window.location.href = "tel:9133498272"}>Contact us</button>
              </div>
            </div>
          </div>
          <div className="col-md-7 col-lg-7">
          </div>
        </div>
        </div> */}

          <div
            id="carouselExampleControls"
            className="carousel slide py-5"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              
              <div className="carousel-item active" data-interval="3000">
                <div className="d-block w-100">
                  <div className="text-light">
                    <h1 className="display-4">AUDITING & ASSURANCE </h1>
                    <hr />
                    <p className="lead">
                      Auditing and Assurance: Trustworthy scrutiny, delivering
                      confidence in financial integrity and operational
                      excellence.
                    </p>
                    <div className="my-4">
                      <button
                        className="btn btn-light mr-3"
                        onClick={() => navigator("/welcome")}
                      >
                        Learn more
                      </button>
                      <button
                        className="btn btn-light"
                        onClick={() =>
                          (window.location.href = "tel:9133498272")
                        }
                      >
                        Contact us
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item" data-interval="3000">
                <div className="d-block w-100">
                  <div className="text-light">
                    <h1 className="display-4">DIRECT & INDIRECT TAXES </h1>
                    <hr />
                    <p className="lead">
                      Your trusted partner for expert tax solutions: Direct and
                      indirect tax services tailored for your business
                    </p>
                    <div className="my-4">
                      <button
                        className="btn btn-light mr-3"
                        onClick={() => navigator("/welcome")}
                      >
                        Learn more
                      </button>
                      <button
                        className="btn btn-light"
                        onClick={() =>
                          (window.location.href = "tel:9133498272")
                        }
                      >
                        Contact us
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item" data-interval="3000">
                <div className="d-block w-100">
                  <div className="text-light">
                    <h1 className="display-4">NRI TAX COMPLIANCES </h1>
                    <hr />
                    <p className="lead">
                      NRI Tax Compliance Experts: Ensuring smooth and
                      hassle-free tax obligations for Non-Resident Indians
                      (NRIs).
                    </p>
                    <div className="my-4">
                      <button
                        className="btn btn-light mr-3"
                        onClick={() => navigator("/welcome")}
                      >
                        Learn more
                      </button>
                      <button
                        className="btn btn-light"
                        onClick={() =>
                          (window.location.href = "tel:9133498272")
                        }
                      >
                        Contact us
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item" data-interval="3000">
                <div className="d-block w-100">
                  <div className="text-light">
                    <h1 className="display-4">
                      BUSINESS STARTUP & <br/> ESTABLISHMENT SERVICES{" "}
                    </h1>
                    <hr />
                    <p className="lead">
                      Unlock Your Business Potential: Comprehensive Startup &
                      Establishment Services for Building and Scaling Successful
                      Ventures.
                    </p>
                    <div className="my-4">
                      <button
                        className="btn btn-light mr-3"
                        onClick={() => navigator("/welcome")}
                      >
                        Learn more
                      </button>
                      <button
                        className="btn btn-light"
                        onClick={() =>
                          (window.location.href = "tel:9133498272")
                        }
                      >
                        Contact us
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item" data-interval="3000">
                <div className="d-block w-100">
                  <div className="text-light">
                    <h1 className="display-4">BOOK KEEPING SERVICES </h1>
                    <hr />
                    <p className="lead">
                      Accurate and Reliable Bookkeeping Solutions: Keeping your
                      financial records in order with precision and expertise.
                    </p>
                    <div className="my-4">
                      <button
                        className="btn btn-light mr-3"
                        onClick={() => navigator("/welcome")}
                      >
                        Learn more
                      </button>
                      <button
                        className="btn btn-light"
                        onClick={() =>
                          (window.location.href = "tel:9133498272")
                        }
                      >
                        Contact us
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-target="#carouselExampleControls"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-target="#carouselExampleControls"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </button>
        </div>
      </div>

      <Services />
      <Company/>
      <About />
      {/* <Clientss/> */}
      {/* <ClientHome/> */}
      {/* <Team /> */}
      {/* <News/> */}
      {/* <Testimonials /> */}
      <Contact />
      <Map />
    </div>
  );
}
