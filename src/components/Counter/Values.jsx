export const Value = ({ value, biggerValue, initiateValue }) => (
  <>
    <span className="Counter__value">{value}</span>
    <span className="Counter__value">{biggerValue}</span>
    <span className="Counter__value">{initiateValue}</span>
  </>
);