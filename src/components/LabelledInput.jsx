const LabelledInput = ({ value, onChange, label }) => {
  return (
    <>
      <label htmlFor={label}>{label}</label>
      <input id={label} type="number" value={value} onChange={onChange} />
    </>
  );
};

export default LabelledInput;
