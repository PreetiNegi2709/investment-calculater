import LabelledInput from "./LabelledInput";

const Calculator = ({ inputArray, setInputArray, onChange }) => {
  return (
    <div className="input-group">
      <div id="user-input">
        <LabelledInput
          value={inputArray.initialInvestment}
          onChange={(e) => {
            onChange(e, "initialInvestment");
          }}
          label="initial investment"
        />
      </div>
      <div id="user-input">
        <LabelledInput
          value={inputArray.annualInvestment}
          onChange={(e) => {
            onChange(e, "annualInvestment");
          }}
          label="annual investment"
        />
      </div>
      <div id="user-input">
        <LabelledInput
          value={inputArray.expectedReturn}
          onChange={(e) => {
            onChange(e, "expectedReturn");
          }}
          label="expected return"
        />
      </div>
      <div id="user-input">
        <LabelledInput
          value={inputArray.duration}
          onChange={(e) => {
            onChange(e, "duration");
          }}
          label="duration"
        />
      </div>
    </div>
  );
};

export default Calculator;
