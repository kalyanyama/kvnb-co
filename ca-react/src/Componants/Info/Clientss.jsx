import "./Whyus.css"

export default function Clientss() {
  return (
    <div className="container-fluid" id="clients">
      <div className="container my-5"  data-aos="zoom-out">
      <div className="row my-5">
              <div className="col-md col-lg">
                <h5 className="text-success">about our</h5><hr className="hr-sm"/>
                <h1 className="text-dark display-3 font-weight-bold">
                  Clients <span className="text-muted">reviews.</span>
                </h1>
              </div>
            </div>
        <div className="row mt-5">
          <div className="col-md col-lg-4 mb-3 my-auto ">
            <div className="client-main p-3">
              <h1 className="text-center">#3120</h1>
              <h2 className="text-success font-weight-bold text-center">RESPONSES</h2>
              <p>Lorem, ipsum dolor sit amet eum veniam adipisci quaerat ipsam magni, consectetur omnis consequatur qui illo quas at pariatur cumque.</p>
            </div>
          </div>
          <div className="col-md col-lg-4 mb-3 my-auto">
            <div className="client-main p-3">
              <h1 className="text-center">#76</h1>
              <h2 className="text-success font-weight-bold text-center">COMPANIES</h2>
              <p>Lorem, ipsum dolor sit amet eum veniam adipisci quaerat ipsam magni, consectetur omnis consequatur qui illo quas at pariatur cumque.</p>
            </div>
          </div>
          <div className="col-md col-lg-4 mb-3 my-auto">
            <div className="client-main p-3">
              <h1 className="text-center">#1221</h1>
              <h2 className="text-success font-weight-bold text-center">PEOPLE</h2>
              <p>Lorem, ipsum dolor sit amet eum veniam adipisci quaerat ipsam magni, consectetur omnis consequatur qui illo quas at pariatur cumque.</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md col-lg-2 p-3 mx-auto mb-3 list-client"><b>Google</b></div>
          <div className="col-md col-lg-2 p-3 mx-auto mb-3 list-client"><b>Google</b></div>
          <div className="col-md col-lg-2 p-3 mx-auto mb-3 list-client"><b>Google</b></div>
          <div className="col-md col-lg-2 p-3 mx-auto mb-3 list-client"><b>Google</b></div>
          <div className="col-md col-lg-2 p-3 mx-auto mb-3 list-client"><b>Google</b></div>
        </div>
      </div>
    </div>
  )
}
