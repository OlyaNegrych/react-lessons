export const Filter = ({value, onChange}) => (
  <label>
    Filter by the name
    <input type="text" value={value} onChange={onChange} />
  </label>
);