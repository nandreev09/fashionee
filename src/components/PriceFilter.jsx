export default function PriceFilter({
  price,
  setPrice,
  minimumPrice,
  maximumPrice,
}) {
  const handleMinChange = (e) => {
    setPrice({ ...price, min: e.target.value });
  };

  const handleMaxChange = (e) => {
    setPrice({ ...price, max: e.target.value });
  };
  return (
    <div className="price">
      <div className="filter-title">Price</div>
      <div className="price-filter">
        <input
          className="price-input"
          type="number"
          min="0"
          placeholder={`$${minimumPrice}`}
          value={price.min}
          onChange={handleMinChange}
        />
        <input
          className="price-input"
          type="number"
          min="0"
          placeholder={`$${maximumPrice}`}
          value={price.max}
          onChange={handleMaxChange}
        />
      </div>
    </div>
  );
}
