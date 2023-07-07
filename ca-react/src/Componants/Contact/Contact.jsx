import "./Contact.css"
export default function Contact() {
  return (
    <div id="write-to-us">
    <div className="container-fluid" id="contact">
      <div className="container py-5"  data-aos="zoom-out" >
        <div className="section-header mt-4 text-dark py-4">
          <h1 className="font-weight-bold display-4 text-light">Write to us. K V N B & co.</h1>
          <h5 className="text-light">We are always ready to help you out regarding all your queries.</h5>
        </div>
        <div className="row" >
          <div className="col-md-6 col-lg-6 my-auto">
        <div>
        <h2 className="font-weight-bold text-primary">Present address</h2>
        <p>Regd. Office : 1-8/265, Baghlingampally, Hyderabad Telangana 500044</p>
        </div>
        <br/>
        <div>
        <h2 className="font-weight-bold text-primary">Mobile number</h2>
        <p><a className="text-light" href="tel:+919133417279"> +91 91334 17279</a></p>
        <p><a className="text-light" href="tel:+9191334982729"> +91 91334 98272</a></p>
        </div>
        <br/>
        <div>
        <h2 className="font-weight-bold text-primary">Email address</h2>
        <p><a className="text-light" href="mailto:ca.vishwamber@gmail.com"> ca.vishwamber@gmail.com</a></p>
        <p><a className="text-light" href="mailto:cabharathnalla.ncbr@gmail.com"> cabharathnalla.ncbr@gmail.com</a></p>
        <br/>

      </div>
          </div>
          <div className="col-md-6 col-lg-6">
            <form>
              <div className="form-group">
                {/* <label className="float-left">Enter name</label> */}
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter name"
                  required
                />
              </div>
              <div className="form-group">
                {/* <label className="float-left">Enter mobile</label> */}
                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter mobile"
                  required
                />
              </div>
              <div className="form-group">
                {/* <label className="float-left">Enter Email</label> */}
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  required
                />
              </div>
              <div className="form-group">
                {/* <label className="float-left">Enter name</label> */}
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter business name (optional)"
                  required
                />
              </div>
              <div className="form-group">
                {/* <label className="float-left">Write your message here</label> */}
                <textarea
                  className="form-control"
                  rows="6"
                  placeholder="Explain how can we help you ?"
                  required
                />
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-primary">
                  Submit
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
