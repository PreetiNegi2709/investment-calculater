import { formatter } from "../util/investment";
const DisplayData = ({ anuualData }) => {
  return (
    <>
      {/* {anuualData.length < 1 ? (
        <p className="center">Invalid Duration</p>
      ) : ( */}
      <table id="result">
        <thead>
          <tr>
            <th>Years</th>
            <th>Investment Value</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {anuualData.length < 1 ? (
            <tr className="center">
              <td colSpan="5">Incorrect Duration</td>
            </tr>
          ) : (
            anuualData.map((singleYear) => {
              return (
                <tr key={singleYear.year}>
                  <td>{singleYear.year}</td>
                  <td>{formatter.format(singleYear.valueEndOfYear)}</td>
                  <td>{formatter.format(singleYear.interest)}</td>
                  <td>{formatter.format(singleYear.interest)}</td>
                  <td>{formatter.format(singleYear.annualInvestment)}</td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
      {/* )} */}
    </>
  );
};

export default DisplayData;
