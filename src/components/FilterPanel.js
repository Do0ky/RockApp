import { useState } from "react"; // Import useState hook for state management
import { useEffect } from "react"; // Import useEffect hook to handle side effects

const FilterPanel = ( {onFilterChange} ) => {
    // State to manage selected filters
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedTypes, setSelectedTypes] = useState([]);

    // Effect to call onFilterChange whenever selectedCategories or selectedTypes change
    useEffect(() => {
    onFilterChange({ categories: selectedCategories, types: selectedTypes });
    }, [selectedCategories, selectedTypes]);

    /* Function to handle category changes */
    // will add or remove a category from the array when a checkbox is toggled
    const handleCategoryChange = (event) => {
        // Destructure value and checked properties from the event target
        const { value, checked } = event.target;

        // Update the selectedCategories state based on checkbox status
        // If checked, add the category; if unchecked, remove it from the array
        // The previous state is accessed via the callback function's argument (prev)
        // if checked is true, spread the previous array and add the new value
        // if checked is false, filter out the value from the previous array
        setSelectedCategories( (prev) =>
            checked ? [...prev, value] : prev.filter( (cat) => cat !== value)
            // Create the updated array based on checkbox status
        );
    };
     /* Similar function to handle type changes */
    const handleTypeChange = (event) => {
        const { value, checked } = event.target; 

        setSelectedTypes( (prev) => 
            checked ? [...prev, value] : prev.filter( (type) => type !== value)
        );
    };

    /* Function to reset all filters */
    const handleReset = () => {
        setSelectedCategories([]);
        setSelectedTypes([]);
    };
    // Determine if any filter is active for UI (if none, disable reset button)
    const isFilterActive = selectedCategories.length > 0 || selectedTypes.length > 0;

    return (
        <div className="filter-panel">

            <h2>Filter</h2>

            <h4>By Category</h4>
            <div className="filter-options">
                <label>
                    <input type="checkbox" value="Igneous" onChange={handleCategoryChange} checked={selectedCategories.includes("Igneous")} />
                    Igneous
                </label>
                <label>
                    <input type="checkbox" value="Sedimentary" onChange={handleCategoryChange} checked={selectedCategories.includes("Sedimentary")} />
                    Sedimentary
                </label>
                <label>
                    <input type="checkbox" value="Metamorphic" onChange={handleCategoryChange} checked={selectedCategories.includes("Metamorphic")} />
                    Metamorphic
                </label>
            </div>

            <br />

            <h4>By Type</h4>
            <div className="filter-options">
                <label>
                    <input type="checkbox" value="Chemical" onChange={handleTypeChange} checked={selectedTypes.includes("Chemical")} />
                    Chemical
                </label>
                <label>
                    <input type="checkbox" value="Clastic" onChange={handleTypeChange} checked={selectedTypes.includes("Clastic")} />
                    Clastic
                </label>
                <label>
                    <input type="checkbox" value="Organic" onChange={handleTypeChange} checked={selectedTypes.includes("Organic")} />
                    Organic
                </label>
            </div>

            <button onClick={handleReset} disabled={!isFilterActive} className="btn btn-outline-secondary mt-3">
                Clear Filters
            </button>

        </div>
    );
};

export default FilterPanel;