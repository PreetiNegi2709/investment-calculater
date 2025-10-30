import { useState } from "react";
import Header from "./components/Header";
import logoImg from "./assets/investment-calculator-logo.png";
import Calculator from "./components/Calculator";
import DisplayData from "./components/DisplayData";
import { calculateInvestmentResults } from "./util/investment.js";

const initialInputArray = {
  initialInvestment: 0,
  annualInvestment: 0,
  expectedReturn: 0,
  duration: 0,
};

function App() {
  const [inputArray, setInputArray] = useState(initialInputArray);

  const handleChanges = (e, dynamicKey) => {
    setInputArray((prevArray) => ({
      ...prevArray,
      [dynamicKey]: parseInt(e.target.value),
    }));
  };

  const anuualData = calculateInvestmentResults(inputArray);

  return (
    <>
      <Header>
        <img src={logoImg} alt="Calculator Logo" />
      </Header>
      <Calculator
        inputArray={inputArray}
        setInputArray={setInputArray}
        onChange={handleChanges}
      />
      <DisplayData anuualData={anuualData} />
      {/* 
      display results in table */}
    </>
  );
}

export default App;
