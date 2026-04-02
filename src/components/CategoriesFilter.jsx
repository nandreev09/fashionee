import BG_ICON from "../assets/icons/bg.svg";
import LINE_ICON from "../assets/icons/line.svg";

export default function Categories({
  availableCategories,
  selectedCategories,
  setCategories,
}) {
  const handleClick = (category) => {
    if (category === "All") {
      setCategories(["All"]);
    } else {
      const filtered = selectedCategories.filter((c) => c !== "All");
      if (filtered.includes(category)) {
        setCategories(filtered.filter((c) => c !== category));
      } else {
        setCategories([...filtered, category]);
      }
    }
  };
  return (
    <div className="categories">
      <div className="filter-title">Categories</div>
      <ul className="categories-list">
        {availableCategories.map((category) => (
          <div key={category} className="categorie-string">
            <img
              src={selectedCategories.includes(category) ? LINE_ICON : BG_ICON}
              alt=""
            />
            <li
              className={`categorie ${
                selectedCategories.includes(category) ? "active" : ""
              }`}
              onClick={() => handleClick(category)}
            >
              {category}
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}
