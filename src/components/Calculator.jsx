import LabelledInput from "./LabelledInput";

const Calculator = ({ inputArray, setInputArray, onChange }) => {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <LabelledInput
            value={inputArray.initialInvestment}
            onChange={(e) => {
              onChange(e, "initialInvestment");
            }}
            label="initial investment"
          />
        </p>
        <p>
          <LabelledInput
            value={inputArray.annualInvestment}
            onChange={(e) => {
              onChange(e, "annualInvestment");
            }}
            label="annual investment"
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <LabelledInput
            value={inputArray.expectedReturn}
            onChange={(e) => {
              onChange(e, "expectedReturn");
            }}
            label="expected return"
          />
        </p>
        <p>
          <LabelledInput
            value={inputArray.duration}
            onChange={(e) => {
              onChange(e, "duration");
            }}
            label="duration"
          />
        </p>
      </div>
    </section>
  );
};

export default Calculator;
