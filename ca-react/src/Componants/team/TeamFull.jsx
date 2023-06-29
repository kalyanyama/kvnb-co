import "./Team.css"
export default function TeamFull() {
  return (
    <div className="container-fluid" id="team-full">
      <div className="container p-5" data-aos="zoom-out">
        <div className="team-full-bg my-5 p-2">

        <div className="row">
        <div className="col-md-4 mx-auto my-3 col-lg-4 card rounded-lg p-3 bg-light shadow ">
            <div className="card-front">
          <img src="/member3.png" alt="" className="img-fluid"/>
            <h6 className="font-weight-bold text-center">K Vishwambhar</h6>
            </div>
            <div className="card-back ">
              <h4 className="text-center">Vishwaber Kondlapally</h4>
              <h6 className="text-center"><b>B.com CA</b></h6>
              <div className="text-center">
              <p className="ms-3">Chartered acoountant.</p>
              <p className="ms-3">Mobile :<span><a href="tel:9133417297">+91 9133417297</a></span></p>
              <p className="ms-3">Email : <span><a  href="mailto:9133498272">ca.vishwamber@gmail.com</a></span></p>
              <p className="ms-3">Location : Hyderabad</p>
              </div>
            </div>
        </div>
        <div className="col-md-4 mx-auto my-3 card col-lg-4 rounded-lg p-3 bg-light shadow ">
          <div className="card-front">
          <img src="/member1.png" alt="" className="img-fluid"/>
            <h6 className="font-weight-bold text-center">N Bharath</h6>
            </div>
            <div className="card-back">
            <h4 className="text-center">Bharat Reddy Nalla</h4>
              <h6 className="text-center"><b>B.com CA</b></h6>
              <div className="text-center">
              <p className="ms-3">Chartered acoountant.</p>
              <p className="ms-3">Mobile : <span ><a  href="tel:9133498272">+91 9133498272</a></span></p>
              <p className="ms-3">Email : <span><a  href="mailto:9133498272">cabharathnalla.ncbr@gmail.com</a></span></p>
              <p className="ms-3">Location : Hyderabad</p>
              </div>
            </div>
        </div>
      </div>
        <div className="row ">
          <div className="col-md-3 mx-auto my-3 col-lg-3 rounded-lg p-3 bg-light shadow">
            <img src="/member3.png" alt="" className="img-fluid" />
            <div className="">
              <h6 className="font-weight-bold my-0">Member 1</h6>
              <p className="">Team </p>
            </div>
          </div>
          <div className="col-md-3 mx-auto my-3 col-lg-3 rounded-lg p-3 bg-light shadow">
            <img src="/member2.png" alt="" className="img-fluid" />
            <div className="">
              <h6 className="font-weight-bold my-0">Member 2</h6>
              <p className="">Team</p>
            </div>
          </div>
          <div className="col-md-3 mx-auto my-3 col-lg-3 rounded-lg p-3 bg-light shadow">
            <img src="/member1.png" alt="" className="img-fluid" />
            <div className="">
              <h6 className="font-weight-bold my-0">Member 3</h6>
              <p className="">Team</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
