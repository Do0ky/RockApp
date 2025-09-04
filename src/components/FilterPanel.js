import { useState } from "react"; // Import useState hook for state management

const FilterPanel = ( {onFilterChange} ) => {
    // State to manage selected filters
    const [selectedCategories, setSelectedCategories] = useState([]);

    // Function to handle category changes (will add or remove a category from the array when a checkbox is toggled)
    const handleCheckboxChange = (event) => {
        // Destructure value and checked properties from the event target
        const { value, checked } = event.target;

        // Update the selectedCategories state based on checkbox status
        // If checked, add the category; if unchecked, remove it from the array
        // The previous state is accessed via the callback function's argument (prev)
        // if checked is true, spread the previous array and add the new value
        // if checked is false, filter out the value from the previous array
        setSelectedCategories( (prev) => {
            const updated = checked ? [...prev, value] : prev.filter( (cat) => cat !== value); // Create the updated array based on checkbox status
            onFilterChange(updated); // Call the onFilterChange prop with the updated categories
            return updated; // Return the updated array to set it as the new state
        });  
    };

    return (
        <div className="filter-panel">
            <h2>Filter by Category</h2>
            <div className="filter-options">
                <label>
                    <input type="checkbox" value="Igneous" onChange={handleCheckboxChange} checked={selectedCategories.includes("Igneous")} />
                    Igneous
                </label>
                <label>
                    <input type="checkbox" value="Sedimentary" onChange={handleCheckboxChange} checked={selectedCategories.includes("Sedimentary")} />
                    Sedimentary
                </label>
                <label>
                    <input type="checkbox" value="Metamorphic" onChange={handleCheckboxChange} checked={selectedCategories.includes("Metamorphic")} />
                    Metamorphic
                </label>
            </div>
        </div>
    );
};

export default FilterPanel;