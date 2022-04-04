const RowCount = ({ curVal, setVal }) => {
  const options = [5, 10, 15, 20];
  return (
    <div>
      <label>Rows per page</label>
      <select
        value={curVal}
        onChange={(e) => {
          setVal(e.target.value);
        }}
      >
        {options &&
          options.map((option) => {
            return (
              <option key={option} value={option}>
                {option}
              </option>
            );
          })}
      </select>
    </div>
  );
};

export default RowCount;
