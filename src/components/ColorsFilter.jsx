export default function ColorsFilter({
  availableColors = [],
  selectedColors = [],
  setColors,
}) {
  const handleChange = (color) => {
    if (selectedColors.includes(color)) {
      setColors(selectedColors.filter((c) => c !== color));
    } else {
      setColors([...selectedColors, color]);
    }
  };

  return (
    <div className="colors">
      <div className="title-and-list">
        <div className="filter-title">Colors</div>
        <form className="checkbox-list">
          {availableColors.map((color) => (
            <div key={color} className="checkbox">
              <input
                type="checkbox"
                className="checkbox-input"
                checked={selectedColors.includes(color)}
                onChange={() => handleChange(color)}
                id={color}
              />
              <label className="checkbox-label" htmlFor={color}>
                {color}
              </label>
            </div>
          ))}
        </form>
      </div>
    </div>
  );
}
