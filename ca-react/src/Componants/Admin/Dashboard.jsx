import { Link, Outlet } from "react-router-dom";
export default function Dashboard() {
  return (
    <div>
      <div className="container-fluid mt-5 ">
        <div className="container py-5 mt-5">
          <div>
            <h1 className="text-center text-primary">Dashboard</h1>
          </div>
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard">
                Contacted 
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard/calculated">
                Calculated
              </Link>
            </li>
          </ul>
          <div className="row">
            <div className="col-md col-lg">
                <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
