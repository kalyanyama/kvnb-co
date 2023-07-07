import { useEffect, useState } from "react";
import { baseUrl } from "../helpers/helper";

export default function Contacted() {
  const [contactedData, setContactedData] = useState([]);
  const url = baseUrl;
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchingData = async () => {
      await fetch(url + "contact/", {
        method: "get",
        headers: { "Content-Type": "application/json", ADMIN_HEADER: token },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            setContactedData(data.results);
          } else {
            setContactedData(data.results);
          }
        });
    };
    fetchingData();
  }, []);

  const mapping =
    contactedData.length === 0 ? (
      <>
        <tr>
          <th scope="row">1</th>
          <td>Loading..</td>
          <td>Loading..</td>
          <td>Loading..</td>
        </tr>
      </>
    ) : (
      contactedData.map((cls, l) => {
        const num = 1 + l
        return (
          <>
            <tr>
              <td key={l}>
                {num}
              </td>
              {/* <td key={l}>
                <a href="#">{cls.contact_id}</a>
              </td> */}
              <td>{cls.name}</td>
              <td>{cls.email}</td>
              <td>{cls.mobile}</td>
              <td>{cls.message}</td>
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
            <table className="table table-striped ">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Mobile</th>
                  <th scope="col">Message</th>
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
