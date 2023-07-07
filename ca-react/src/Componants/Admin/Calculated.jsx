import { useEffect, useState } from "react";
import { baseUrl } from "../helpers/helper";

export default function Calculated() {
  const [calculatedData, setCalculatedData] = useState([]);
  const url = baseUrl;
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchingData = async () => {
      await fetch(url + "calculator/", {
        method: "get",
        headers: { "Content-Type": "application/json", ADMIN_HEADER: token },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            setCalculatedData(data.results);
          } else {
            setCalculatedData(data.results);
          }
        });
    };
    fetchingData();
  }, []);

  const mapping =
    calculatedData.length === 0 ? (
      <>
        <tr>
          <th scope="row">1</th>
          <td>Loading..</td>
          <td>Loading..</td>
          <td>Loading..</td>
        </tr>
      </>
    ) : (
      calculatedData.map((cls, l) => {
        const num = 1+ l
        return (
          <>
            <tr>
            <td key={l}>
                {num}
              </td>
            {/* <td key={l}>
                <a href="#">
                {cls.cals_id}
                </a>
              </td> */}
              <td>{cls.name}</td>
              <td>{cls.mobile}</td>
              <td>{cls.amount}</td>
            </tr>
          </>
        );
      })
    );

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md col-lg table-responsive">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Mobile</th>
                  <th scope="col">Tax Amount</th>
                </tr>
              </thead>
              <tbody>{mapping}</tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
