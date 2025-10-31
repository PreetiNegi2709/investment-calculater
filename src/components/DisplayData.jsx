import { formatter } from "../util/investment";
const DisplayData = ({ anuualData }) => {
  let initialInvestment;
  if (anuualData.length > 0) {
    initialInvestment =
      anuualData[0].valueEndOfYear -
      anuualData[0].interest -
      anuualData[0].annualInvestment;
  }
  return (
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
            const totalInterest =
              singleYear.valueEndOfYear -
              singleYear.annualInvestment * singleYear.year -
              initialInvestment;

            const totalAmmountInvested =
              singleYear.valueEndOfYear - totalInterest;
            return (
              <tr key={singleYear.year}>
                <td>{singleYear.year}</td>
                <td>{formatter.format(singleYear.valueEndOfYear)}</td>
                <td>{formatter.format(singleYear.interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(totalAmmountInvested)}</td>
              </tr>
            );
          })
        )}
      </tbody>
    </table>
  );
};

export default DisplayData;
