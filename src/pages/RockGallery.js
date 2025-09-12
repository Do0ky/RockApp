import rocks from "../data/rocks.json"; // Importing the JSON data file
import RockCard from "../components/RockCard";
import { useMemo, useState } from "react"; // Importing useState hook for state management
import FilterPanel from "../components/FilterPanel";
import RockSearch from "../components/SearchPanel";

function RockGallery() {
    
    /* FILTERS */
    const [filters, setFilters] = useState({ categories: [], types: [] }); // State to hold the currently active filters: holds both filters together in an object

    // Function to update filters state when FilterPanel changes
    // If no filters are selected, it resets to empty arrays (all rocks shown)
    // If filters are selected, rocks must match both category and type to be shown
    const filteredRocks = useMemo( () => {
    const { categories, types } = filters;
    return rocks.filter( (rock) => {
        const categoryMatch = categories.length === 0 || categories.includes(rock.category);
        const typeMatch = types.length === 0 || types.includes(rock.type);
        return categoryMatch && typeMatch;
    });
    }, [filters]);

    /* SEARCH */
    // Search state and fields
    const [query, setQuery] = useState(""); // State to hold the current search, initially empty string
    
    // Text search layered on the category-filtered list
    const  visibleRocks = useMemo( () => {
        const searchFields = ["name", "type", "category", "texture", ]; // from JSON
        const q = query.trim().toLowerCase();
        // If no search query, return the filteredRocks as is
        if (!q) return filteredRocks;
        // Otherwise, filter the already category/type-filtered rocks by the search query
        return filteredRocks.filter( (rock) =>
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
                <FilterPanel onFilterChange={setFilters} /> {/* Passing setFilters function as a prop */}

                <div className="d-flex flex-wrap justify-content-center flex-grow-1">
                    {/* Using filteredRocks to display only the rocks that match the active filters */}
                    {visibleRocks.map( r => <RockCard key={r.id} rock={r} /> )}
                    {/* rock is an attribute of RockCard. The parameter r is getting put into the prop called rock on the RockCard component */}
                    {/* This r parameter will be given to each RockCard it creates by mapping, in a rock prop. And then it can be accessed in the RockCard component */}
                </div>

            </div>

        </div>
    )
};

export default RockGallery;