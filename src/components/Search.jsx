import searchIcon from "../assets/icons/search.svg";

export default function Search({ search, setSearch }) {
  return (
    <div className="search">
      <div className="search-form">
        <input
          type="text"
          placeholder="Search"
          name="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <img src={searchIcon} alt="" />
      </div>
    </div>
  );
}
