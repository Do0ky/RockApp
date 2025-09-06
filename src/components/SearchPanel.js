export default function RockSearch({ query, setQuery }) {
    return (
        <input
            type="search"
            placeholder="Search rocks (name, category, type)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="rock-search-input"
            aria-label="Search Rocks"
        />
    );
}