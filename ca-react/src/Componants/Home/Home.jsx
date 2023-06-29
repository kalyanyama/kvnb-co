import Services from "../Services/Services";
import Testimonials from "../Testimonials/Testimonials";
// import Team from "../team/Team";
import About from "../Info/About";
import Contact from "../Contact/Contact";
import Map from "../Footer/Map";
import "../Home/Home.css";
// import ClientHome from "../Info/ClientHome";
import { useEffect, useState } from "react";
import News from "../news/News";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [article, setArticle] = useState([]);
  const navigator = useNavigate()

  useEffect(() => {
    const fetching = () => {
      fetch(
        // "https://gnews.io/api/v4/search?q=tax&lang=en&country=in&max=10&apikey=0592711ca96bfa23d52fbd0cf0e4128b"
      )
        .then((res) => res.json())
        .then((data) => setArticle(data.articles));
    };
    fetching();
  }, []);

  const mapping = article?.map((newss, n) => {
    return (
      <>
        <div key={n}>
          <p className="mx-3">
            <a href={`${newss?.url}`}>{newss?.title}</a>
          </p>
        </div>
      </>
    );
  });

  return (
    <div id="home">
      <div className="">
        <div className="row mt-5 pt-4">
          <div className="col-md-12 col-lg-12 heading-news">
            <div className="ul py-1">{mapping}</div>
          </div>
        </div>
        {/* <div className="row bg-home">
          <div className="col-md-12 col-lg-12">
            <div
              id="carouselExampleFade"
              className="carousel slide carousel-fade"
              data-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active img-home">
                  <img src="home-1.jpg" className="d-block w-100" alt="..." />
                  <div className="text-home  d-md-block d-none">
                    <div className="content-home">
                    <h1 className="text-center">Expert Financial Guidance </h1><hr/>
                    <p>Our charted accountant team brings extensive knowledge and expertise to guide you through complex financial challenges. From tax planning to financial analysis, we provide tailored solutions to optimize your financial performance.</p>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src="home-2.jpg" className="d-block w-100" alt="..." />
                  <div className="text-home  d-md-block d-none">
                    <div className="content-home">
                    <h1 className="text-center">Streamlined Processes </h1><hr/>
                    <p> Say goodbye to tedious bookkeeping and financial management tasks. Our charted accountant team streamlines your processes, leveraging advanced software and tools to ensure accuracy, efficiency, and compliance. Focus on growing your business while we take care of the numbers.</p>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src="home-3.jpg" className="d-block w-100" alt="..." />
                  <div className="text-home d-md-block d-none">
                    <div className="content-home">
                    <h1 className="text-center">Proactive Risk Management </h1><hr/>
                    <p> Minimize risks and maximize opportunities with our proactive approach to financial management. Our charted accountants analyze market trends, identify potential pitfalls, and develop strategies to safeguard your financial interests. Stay one step ahead and make informed decisions with our support.</p>
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-target="#carouselExampleFade"
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
                data-target="#carouselExampleFade"
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
        </div> */}
      </div>

        <div className="home-main">
        <div className="content-home">
        <div className="container">
        <div className="row">
          <div className="col-md-5 col-lg-5 my-auto" data-aos="zoom-out">
            <div className="text-light">
              <h1 className="display-4">Expert Financial Guidance </h1>
              <hr />
              <p>
                Our charted accountant team brings extensive knowledge and
                expertise to guide you through complex financial challenges.
                From tax planning to financial analysis, we provide tailored
                solutions to optimize your financial performance.
              </p>
              <div className="my-4">
              <button className="btn btn-light mr-3" onClick={()=>navigator("/contact")}>Lets Discuss</button>
              <button className="btn btn-light" onClick={()=>window.location.href = "tel:9133417279"}>Call us</button>
              </div>
            </div>
          </div>
          <div className="col-md-7 col-lg-7">
          {/* <img src="home-3.jpg" className="img-fluid" alt="home-content"/> */}
          </div>
        </div>
        </div>
        </div>
        </div>

      <Services />
      <About />
      {/* <Clientss/> */}
      {/* <ClientHome/> */}
      {/* <Team /> */}
      <Testimonials />
      <News />
      <Contact />
      <Map />
    </div>
  );
}
