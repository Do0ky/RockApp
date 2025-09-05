import rocks from "../data/rocks.json"; // Importing the JSON data file
import RockCard from "../components/RockCard";
import { useState } from "react"; // Importing useState hook for state management
import FilterPanel from "../components/FilterPanel";

function RockGallery() {

    const [activeCategories, setActiveCategories] = useState([]); // State to hold the currently active filter categories

    const filteredRocks = activeCategories.length === 0 ? 
    rocks : rocks.filter( (rock) => activeCategories.includes(rock.category) );
    // Filtering rocks based on active categories; if none are active, show all rocks

    return (
        <div className="rock-gallery">

            <h2 className="text-center">Rock Gallery</h2>

            <div className="rock-gallery d-flex">
                <FilterPanel onFilterChange={setActiveCategories} /> {/* Passing setActiveCategories function as a prop */}
                <div className="d-flex flex-wrap justify-content-center flex-grow-1">
                    {/* Using filteredRocks to display only the rocks that match the active filters */}
                    {filteredRocks.map( r => <RockCard key={r.id} rock={r} /> )}
                </div>
            </div>

        </div>
    );
};
// rock is an attribute of RockCard => the parameter r is getting put into the prop called rock on the RockCard component
// This r parameter will be given to each RockCard it creates by mapping, in a rock prop. And then it can be accessed in the RockCard component

export default RockGallery;