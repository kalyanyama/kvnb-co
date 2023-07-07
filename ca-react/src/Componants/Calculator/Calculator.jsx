import { useState } from "react";
import emailjs  from "@emailjs/browser"
import "./Calculator.css"
export default function Calculator() {
  const [results, setResults] = useState(false);
  const [userName, setUserName] = useState("");
  const [userMobile, setUserMobile] = useState("");
  const [Income, setIncome] = useState(0);
  const [MinusAmt, setMinusAmt] = useState(0);
  const [OldTax, setOldTax] = useState(0);
  const [NewTax, setNewTax] = useState(0);
  
  const updatedIncome = Income - MinusAmt - 50000
  
  const handleCalculations = (e) => {
    e.preventDefault();

    emailjs.send("service_8wjhhql", "template_vxdxsi6", {
      from_name : userName,
      from_mobile : userMobile
    }, "b_nBUkZl0EkDLLatq")
    .then(function(response) {
       console.log(response.status, response.text);
    }, function(error) {
       console.log(error);
    });

    setResults(true);
    

    var oldTaxTotal = 0;

    if (updatedIncome <= 250000) {
      oldTaxTotal = updatedIncome * 0;
    } else if (updatedIncome <= 500000) {
      const noTaxAmount = updatedIncome - 250000;
      const remainingAmount = noTaxAmount * 0.05;
      // const amountWithSurCharge = remainingAmount * 0.04;
      // oldTaxTotal = remainingAmount + amountWithSurCharge;
      oldTaxTotal = remainingAmount;
    } else if (updatedIncome <= 1000000) {
      const noTaxAmount = updatedIncome - 250000;
      const firstTaxCal = noTaxAmount - 250000;
      const remainingAmount = firstTaxCal * 0.2 + 12500;
      // const amountWithSurCharge = remainingAmount * 0.04;
      // oldTaxTotal = remainingAmount + amountWithSurCharge;
      oldTaxTotal = remainingAmount;
    } else {
      const noTaxAmount = updatedIncome - 250000;
      const firstTaxCal = noTaxAmount - 250000;
      const secondTaxCal = firstTaxCal - 500000;
      const remainingAmount = secondTaxCal * 0.3 + 12500 + 100000;
      // const amountWithSurCharge = remainingAmount * 0.04;
      // oldTaxTotal = remainingAmount + amountWithSurCharge;
      oldTaxTotal = remainingAmount;
    }
    setOldTax(oldTaxTotal);

    let newTaxTotal = 0;
    if (updatedIncome <= 300000) {
      newTaxTotal = updatedIncome * 0;
    } else {
      if (updatedIncome <= 600000) {
        const noTaxAmount = updatedIncome - 300000;
        const remainingAmount = noTaxAmount * 0.05;
        // const amountWithSurCharge = remainingAmount * 0.04;
        // newTaxTotal = remainingAmount + amountWithSurCharge;
        newTaxTotal = remainingAmount;
      } else {
        if (updatedIncome <= 900000) {
          const noTaxAmount = updatedIncome - 300000;
          const firstTaxCal = noTaxAmount - 300000;
          const remainingAmount = firstTaxCal * 0.1 + 15000;
          // const amountWithSurCharge = remainingAmount * 0.04;
          // newTaxTotal = remainingAmount + amountWithSurCharge;
          newTaxTotal = remainingAmount ;
        } else {
          if (updatedIncome <= 1200000) {
            const noTaxAmount = updatedIncome - 300000;
            const firstTaxCal = noTaxAmount - 300000;
            const secondTaxCal = firstTaxCal - 300000;
            const remainingAmount = secondTaxCal * 0.15 + 15000 + 30000;
            // const amountWithSurCharge = remainingAmount * 0.04;
            // newTaxTotal = remainingAmount + amountWithSurCharge;
            newTaxTotal = remainingAmount ;
          } else {
            if (updatedIncome <= 1500000) {
              const noTaxAmount = updatedIncome - 300000;
              const firstTaxCal = noTaxAmount - 300000;
              const secondTaxCal = firstTaxCal - 300000;
              const thirdTaxCal = secondTaxCal - 300000;
              const remainingAmount = thirdTaxCal * 0.2 + 15000 + 30000 + 45000;
              // const amountWithSurCharge = remainingAmount * 0.04;
              // newTaxTotal = remainingAmount + amountWithSurCharge;
              newTaxTotal = remainingAmount ;
            } else {
              const noTaxAmount = updatedIncome - 300000;
              const firstTaxCal = noTaxAmount - 300000;
              const secondTaxCal = firstTaxCal - 300000;
              const thirdTaxCal = secondTaxCal - 300000;
              const fourthTaxCal = thirdTaxCal - 300000;
              const remainingAmount =
                fourthTaxCal * 0.3 + 15000 + 30000 + 45000 + 60000;
              // const amountWithSurCharge = remainingAmount * 0.04;
              // newTaxTotal = remainingAmount + amountWithSurCharge;
              newTaxTotal = remainingAmount;
            }
          }
        }
      }
    }
    setNewTax(newTaxTotal);
  };

  return (
    <div className="container-fluid" id="calculator">
      <div className="container py-5">
        <div className="section-header text-dark mt-5">
          <h5 className="font-weight-bold display-4">Calculate your taxes.</h5>
        </div>
        <div className="row">
          <div className="col-md-6 mx-auto col-lg-6">
            {results ? (
              <>
                <div className="card">
                  <div className="card-header">
                  <h6 className="text-center">
                    {userName}
                    <a
                      href="#"
                      onClick={() => setResults(false)}
                      className="float-right text-dark"
                      >
                      Back
                    </a>
                      </h6>
                  </div>
                  <div className="row">
                  <div className="card-body col-md-6 col-lg-6 p-3">
                    <h5 className="card-title">Post-Budget (Old Regime)</h5>
                    <small className="card-title">FY(2023-2024)</small><hr/>
                    <p className="card-text">Total Gross Income : {Income}</p>
                    <p className="card-text">Total Deductions : {MinusAmt}</p>
                    <p className="card-text">Standard Amount Deductions : 50,000</p>
                    <p className="card-text">Taxable amount : {updatedIncome}</p>
                    <p className="card-text font-weight-bold">Tax on above : {OldTax <= 12500 ? 0 : OldTax}</p>
                  </div>
                  <div className="card-body col-md-6 col-lg-6 p-3">
                  <h5 className="card-title">Post-Budget (New Regime)</h5>
                    <small className="card-title">FY(2023-2024)</small><hr/>
                    <p className="card-text">Total Gross Income : {Income}</p>
                    <p className="card-text">Total Deductions : {MinusAmt}</p>
                    <p className="card-text">Standard Amount Deductions : 50,000</p>
                    <p className="card-text">Taxable amount : {updatedIncome}</p>
                    <p className="card-text font-weight-bold">Tax on above : {NewTax <= 25000 ? 0 : NewTax}</p>
                  </div>
                  </div>
                  <div className="card-footer text-muted">
                    <p className="float-right">
                      - K V N B & CO
                    </p>
                  </div>
                </div>
              </>
            ) : (
              <form onSubmit={handleCalculations}>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    placeholder="Enter Name"
                    className="form-control"
                    onChange={(e) => setUserName(e.target.value)}
                    required
                  />
                  <input
                    type="number"
                    placeholder="Enter Mobile"
                    className="form-control"
                    onChange={(e) => setUserMobile(e.target.value)}
                    required
                  />
                </div>
                <div className="input-group mb-3">
                  <input
                    type="number"
                    placeholder="Enter Total Gross income"
                    className="form-control"
                    onChange={(e) => setIncome(parseInt( e.target.value ))}
                    required
                    min="1"
                  />
                  <input
                    type="number"
                    placeholder="Enter Total Deductions"
                    className="form-control"
                    onChange={(e) => setMinusAmt(parseInt( e.target.value))}
                  />
                </div>
                <div className="text-center">
                  <button className="btn btn-outline-success" type="submit">
                    Calculate
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
