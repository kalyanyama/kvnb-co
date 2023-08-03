import "../Services/Services.css";
import { useLocation } from "react-router-dom";
export default function ServicesFull() {
  const location = useLocation();
  
  return (
    <div className="container-fluid" id="services-full">
      <div className="container">
        <section className="services ">
          <div className="container ">
            <div className="row mt-5 px-4" data-aos="zoom-out">
              <div className="col-md col-lg">
                <h1 className="text-light display-3 font-weight-bold">
                  Services we provide
                </h1>
                <hr className="hr-sm" />
              </div>
            </div>

            <div
              className="row featurette text-light service-list "
              id="audit"
              data-aos="fade-up"
            >
              <div className="col-md-7 m-auto ">
                <h2 className="featurette-heading">
                  AUDITING & ASSURANCE <span className="text-muted"></span>
                </h2>
                <p className="lead">
                  we specializing in auditing and
                  assurance services, my primary goal is to uphold the financial
                  integrity and trust of my clients' businesses. With extensive
                  experience and a deep knowledge of accounting principles and
                  regulations, I strive to deliver exceptional service. From
                  meticulous audit planning and risk assessment to thorough
                  financial examination and verification, I leave no stone
                  unturned in ensuring accuracy and compliance. By providing
                  independent assurance on financial information, evaluating
                  internal controls, and offering valuable recommendations, I
                  aim to enhance my clients' operations and contribute to their
                  success. Through clear and concise communication, I establish
                  strong client relationships built on transparency and trust.
                </p>
              </div>
              <div className="col-md-5 d-none d-md-block">
                <img src="Audit.png" className="img-fluid" />
              </div>
            </div>

            <div
              className="row featurette text-light service-list"
              id="tax"
              data-aos="fade-up"
            >
              <div className="col-md-7 order-md-2 m-auto">
                <h2 className="featurette-heading">
                  DIRECT & INDIRECT TAXES<span className="text-muted"></span>
                </h2>
                <p className="lead">
                  we assist clients in managing their direct and indirect taxes with
                  expertise and precision. With a focus on tax planning and
                  compliance, I guide individuals and businesses through the
                  complexities of tax laws. I offer comprehensive support in
                  preparing accurate tax returns, minimizing tax liabilities,
                  and ensuring adherence to regulatory requirements. Whether
                  it's navigating income tax, corporate tax, value-added tax
                  (VAT), or sales tax, I provide personalized solutions tailored
                  to each client's specific needs. By staying updated on tax
                  regulations and leveraging strategic approaches, I help
                  clients optimize their tax positions and achieve financial
                  efficiency while maintaining compliance.
                </p>
              </div>
              <div className="col-md-5 d-none d-md-block">
                <img src="Tax2.png" className="img-fluid" />
              </div>
            </div>

            <div
              className="row featurette text-light service-list"
              id="nri"
              data-aos="fade-up"
            >
              <div className="col-md-7 m-auto">
                <h2 className="featurette-heading">
                  NRI TAX COMPLIANCES <span className="text-muted"></span>
                </h2>
                <p className="lead">
                 We offer expert assistance to Non-Resident Indians (NRIs) in
                  navigating the intricacies of tax compliance. I understand the
                  unique challenges and obligations faced by NRIs when it comes
                  to tax matters. I help clients determine their residential
                  status, assess their tax liabilities, and ensure compliance
                  with tax laws in their home country as well as any applicable
                  tax treaties. From filing income tax returns to managing
                  investments and assets, I provide comprehensive guidance to
                  optimize tax positions while adhering to all relevant
                  regulations. With my expertise in NRI tax compliances, I
                  empower clients to navigate their tax obligations smoothly and
                  make informed financial decisions.
                </p>
              </div>
              <div className="col-md-5 d-none d-md-block">
                <img src="Tax.png" className="img-fluid" />
              </div>
            </div>

            <div
              className="row featurette text-light service-list"
              id="business"
              data-aos="fade-up"
            >
              <div className="col-md-5 d-none d-md-block">
                <img src="Company.png" className="img-fluid" />
              </div>
              <div className="col-md-7 m-auto">
                <h2 className="featurette-heading">
                  BUSINESS START-UP & ESTABLISHMENT{" "}
                  <span className="text-muted"></span>
                </h2>
                <p className="lead">
                  we are specialize in assisting clients with business start-up and establishment.
                  I offer comprehensive guidance and support to entrepreneurs,
                  helping them navigate the complex financial and regulatory
                  landscape of starting a business. From business entity
                  selection and registration to financial planning and
                  budgeting, I provide expert advice tailored to each client's
                  unique needs. I assist in developing robust financial systems,
                  implementing effective internal controls, and ensuring
                  compliance with legal and tax requirements. With my expertise,
                  clients can confidently establish their businesses, make
                  informed decisions, and lay a solid foundation for long-term
                  success.
                </p>
              </div>
            </div>

            <div
              className="row featurette text-light service-list"
              id="book"
              data-aos="fade-up"
            >
              <div className="col-md-7 m-auto">
                <h2 className="featurette-heading">
                  BOOK KEEPING <span className="text-muted"></span>
                </h2>
                <p className="lead">
                  We are specialize
                  in comprehensive bookkeeping solutions for businesses. I
                  understand the importance of accurate and organized financial
                  records for effective decision-making and regulatory
                  compliance. With meticulous attention to detail, I assist
                  clients in maintaining their books of accounts, recording
                  transactions, and tracking financial information. I ensure
                  that financial statements are prepared in accordance with
                  accounting standards and regulations. Through efficient
                  bookkeeping, I help clients gain insights into their financial
                  health, identify trends, and make informed strategic
                  decisions. With my expertise and commitment to accuracy,
                  clients can focus on their core business activities while
                  knowing their financial records are in expert hands.
                </p>
              </div>
              <div className="col-md-5 d-none d-md-block">
                <img src="book.png" className="img-fluid" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
