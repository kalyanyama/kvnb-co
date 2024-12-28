import emailjs from "@emailjs/browser";
import { useState } from "react";
import { domainName } from "../../siteinformation";
import "./Contact.css";

export default function Contact() {
  const [contactUs, setContactUs] = useState(false);
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [business, setBusiness] = useState("");
  const [message, setMessage] = useState("");
  const [ifContactFailed, setIfContactFailed] = useState("");

  const handleContactus = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_n8v2l6e",
        "template_mr5mx55",
        {
          from_name: name,
          from_mobile: mobile,
          from_email: email,
          from_business: business,
          message: message,
        },
        "HCl6WHhyRWyX18MPm"
      )
      .then(
        function (response) {
          console.log(response.status, response.text);
          setContactUs(true);
          setIfContactFailed(
            "Thanks for contacting us, we'll get back to you soon."
          );
        },
        function (error) {
          setContactUs(false);
          setIfContactFailed("Having issues. Please try again.");
          console.log(error);
        }
      );
  };

  return (
    <div id="write-to-us">
      <div className="container-fluid" id="contact">
        <div className="container py-5" data-aos="zoom-out">
          <div className="section-header mt-4 text-dark py-4">
            <h1 className="font-weight-bold display-4 text-light">
              Write to us. {domainName.label}
            </h1>
            <h5 className="text-light">
              We are always ready to help you out regarding all your queries.
            </h5>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-6 my-auto">
              <div>
                <h2 className="font-weight-bold text-primary">
                  Present address
                </h2>
                <p>
                  Flat No:317, Padmavathi Plaza, Kukatpally, Hyderabad,
                  Telangana 500072
                </p>
              </div>
              <div>
                <h2 className="font-weight-bold text-primary">
                  Business hours
                </h2>
                <p>Mon - Sat: 9AM - 7PM</p>
              </div>
              <div>
                <h2 className="font-weight-bold text-primary">Mobile number</h2>
                <p>
                  <a className="text-light" href="tel:+919133417297">
                    {" "}
                    +91 91334 17297
                  </a>
                </p>
                <p>
                  <a className="text-light" href="tel:+919133498272">
                    {" "}
                    +91 91334 98272
                  </a>
                </p>
              </div>
              <div>
                <h2 className="font-weight-bold text-primary">Email address</h2>

                <p>
                  <a className="text-light" href="mailto:kvnb.cahyd@gmail.com">
                    {" "}
                    kvnb.cahyd@gmail.com
                  </a>
                </p>
                <p>
                  <a className="text-light" href="mailto:ca.hyd@ksnbca.com">
                    {" "}
                    ca.hyd@ksnbca.com
                  </a>
                </p>
                {/* <p>
                  <a
                    className="text-light"
                    href="mailto:ca.vishwamber@gmail.com"
                  >
                    {" "}
                    ca.vishwamber@gmail.com
                  </a>
                </p>
                <p>
                  <a
                    className="text-light"
                    href="mailto:cabharathnalla.ncbr@gmail.com"
                  >
                    {" "}
                    cabharathnalla.ncbr@gmail.com
                  </a>
                </p> */}
              </div>
            </div>
            <div className="col-md-6 col-lg-6">
              <form onSubmit={handleContactus}>
                <div className="form-group">
                  {/* <label className="float-left">Enter name</label> */}
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter name"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  {/* <label className="float-left">Enter mobile</label> */}
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Enter mobile"
                    required
                    onChange={(e) => setMobile(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  {/* <label className="float-left">Enter Email</label> */}
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  {/* <label className="float-left">Enter name</label> */}
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter business name (optional)"
                    // required
                    onChange={(e) => setBusiness(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  {/* <label className="float-left">Write your message here</label> */}
                  <textarea
                    className="form-control"
                    rows="6"
                    placeholder="Explain how can we help you ?"
                    required
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
                <p
                  className={
                    contactUs
                      ? "text-success text-center"
                      : "text-danger text-center"
                  }
                >
                  {ifContactFailed}
                </p>
                <div className="text-center">
                  <button
                    type="submit"
                    className={
                      contactUs ? "btn btn-success" : "btn btn-primary"
                    }
                  >
                    {contactUs ? "Success" : "Submit"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
