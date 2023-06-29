export default function About() {
  return (
    <div className="container-fluid bg-light text-dark p-4" id="about">
      <div className="container" data-aos="zoom-out">
        <div className="section-header text-dark  m-0">
          <h6 className="text-primary">Why us</h6>
          <h1 className="font-weight-bold display-3">Why <span className="text-muted">Choose</span> us.</h1>
        </div>
        <div className="row p-3">
          <div className="col-md-2 col-lg-2">
            <div className="text-center">
              <img
                src="/imgs/accuracy.png"
                width="50px"
                className="img-fluid"
              />
            </div>
            <h4 className="text-center text-success my-3">Accurancy</h4>
          </div>
          <div className="col-md-2 col-lg-2">
            <div className="text-center">
              <img
                src="/imgs/collaborate.png"
                width="50px"
                className="img-fluid"
              />
            </div>
            <h4 className="text-center text-success my-3">Collabrate</h4>
          </div>
          <div className="col-md-2 col-lg-2">
            <div className="text-center">
              <img
                src="/imgs/compliance.png"
                width="50px"
                className="img-fluid"
              />
            </div>
            <h4 className="text-center text-success my-3">Compliance</h4>
          </div>
          <div className="col-md-2 col-lg-2">
            <div className="text-center">
              <img
                src="/imgs/leadership.png"
                width="50px"
                className="img-fluid"
              />
            </div>
            <h4 className="text-center text-success my-3">Team work</h4>
          </div>
          <div className="col-md-2 col-lg-2">
            <div className="text-center">
              <img
                src="/imgs/quality-assurance.png"
                width="50px"
                className="img-fluid"
              />
            </div>
            <h4 className="text-center text-success my-3">Quality</h4>
          </div>
          <div className="col-md-2 col-lg-2">
            <div className="text-center">
              <img src="/imgs/trust.png" width="50px" className="img-fluid" />
            </div>
            <h4 className="text-center text-success my-3">Trust</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
