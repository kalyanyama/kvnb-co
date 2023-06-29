import "./Team.css"
export default function Team() {
  return (
    <div className="container-fluid bg-light" id="team">
    <div className="container" data-aos="fade-up">
    <div className="section-header text-dark my-0 py-3">
        <h6 className="text-primary">About our Professional</h6>
        <h1 className="font-weight-bold display-3">Partners.</h1>
      </div>
      <div className="row">
        <div className="col-md-4 mx-auto my-3 col-lg-4 card rounded-lg p-3 bg-light shadow ">
            <div className="card-front">
          <img src="/member1.png" alt="" className="img-fluid"/>
            <h6 className="font-weight-bold text-center">K Vishwambhar</h6>
            </div>
            <div className=" card-back">
              <h2>Vishwaber Kondlapally</h2>
              <h5><b>B.com CA</b></h5>
              <p>Chartered acoountant.</p>
              <p>Mobile :<span><a href="tel:9133417297">+91 9133417297</a></span></p>
              <p>Email : <span><a  href="mailto:9133498272">ca.vishwamber@gmail.com</a></span></p>
              <p>Location : Hyderabad</p>
            </div>
        </div>
        <div className="col-md-4 mx-auto my-3 card col-lg-4 rounded-lg p-3 bg-light shadow ">
          <div className="card-front">
          <img src="/member1.png" alt="" height="auto" className="img-fluid"/>
            <h6 className="font-weight-bold my-0 text-center">N Bharath</h6>
            </div>
            <div className=" card-back">
            <h2>Bharat Reddy Nalla</h2>
              <h5><b>B.com CA</b></h5>
              <p>Chartered acoountant.</p>
              <p>Mobile : <span ><a  href="tel:9133498272">+91 9133498272</a></span></p>
              <p>Email : <span><a  href="mailto:9133498272">cabharathnalla.ncbr@gmail.com</a></span></p>
              <p>Location : Hyderabad</p>
            </div>
        </div>
      </div>
    </div>
  </div>
  )
}
