import rocks from "../data/rocks.json"; // Importing the JSON data file
import RockCard from "../components/RockCard";
import { useMemo, useState } from "react"; // Importing useState hook for state management
import FilterPanel from "../components/FilterPanel";
import RockSearch from "../components/SearchPanel";

function RockGallery() {

    const [activeCategories, setActiveCategories] = useState([]); // State to hold the currently active filter categories

    const filteredRocks = activeCategories.length === 0 ? 
    rocks : rocks.filter( (rock) => activeCategories.includes(rock.category) );
    // Filtering rocks based on active categories; if none are active, show all rocks

    // Search state and fields
    const [query, setQuery] = useState("");
    

    // text search layered on the category-filtered list
    const  visibleRocks = useMemo(() => {
        const searchFields = ["name", "type", "category", "texture", ]; // from JSON
        const q = query.trim().toLowerCase();
        if (!q) return filteredRocks;

        return filteredRocks.filter((rock) =>
        searchFields.some((field) =>
            String(rock[field] ?? "").toLowerCase().includes(q)
        ));
    }, [query, filteredRocks]);

    return (
        <div className="rock-gallery">
            <h2 className="text-center">Rock Gallery</h2>
            <div className="d-flex justify-content-center my-3">
                <RockSearch query={query} setQuery={setQuery} />
            </div>

            <div className="rock-gallery d-flex">
                <FilterPanel onFilterChange={setActiveCategories} /> {/* Passing setActiveCategories function as a prop */}
                <div className="d-flex flex-wrap justify-content-center flex-grow-1">
                    {/* Using filteredRocks to display only the rocks that match the active filters */}
                    {visibleRocks.map( r => <RockCard key={r.id} rock={r} /> )}
                </div>
            </div>

        </div>
    );
};
// rock is an attribute of RockCard => the parameter r is getting put into the prop called rock on the RockCard component
// This r parameter will be given to each RockCard it creates by mapping, in a rock prop. And then it can be accessed in the RockCard component

export default RockGallery;