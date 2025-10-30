const LabelledInput = ({ value, onChange, label }) => {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input id={label} type="number" value={value} onChange={onChange} />
    </div>
  );
};

export default LabelledInput;
