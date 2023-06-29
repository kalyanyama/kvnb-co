export default function ClientHome() {
  return (
    <div className="container-fluid" id="clients" style={{background : "#fff"}}>
      <div className="container">
      <div className="section-header mt-4 text-dark">
        <h4 className="text-center text-primary">Our</h4>
          <h1 className="font-weight-bold display-3 text-dark"><span className="text-muted">Happy</span> clients.</h1>
        </div>
        <div className="row">
          <div className="col-md col-lg-6 mb-3">
            <img src="/imgs/graph.jpg" alt="" className="img-fluid" />
          </div>
          <div className="col-md col-lg-6 my-auto">
            <div>
              <h2>
                <b>354</b> Happy clients over-all
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur voluptatem doloribus
                culpa architecto possimus! Consequuntur eveniet ex at iste
                molestias id exercitationem?
              </p>
            </div>
            <div>
              <h2>
                <b>65</b> over-all projects
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur voluptatem doloribus
                culpa architecto possimus! Consequuntur eveniet ex at iste
                molestias id exercitationem?
              </p>
            </div>
            <div>
              <h2>
                <b>99%</b> growth 
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur voluptatem doloribus
                culpa architecto possimus! Consequuntur eveniet ex at iste
                molestias id exercitationem?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
