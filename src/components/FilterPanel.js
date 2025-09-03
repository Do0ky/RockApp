import React from "react";
import { useState } from "react"; // Import useState hook for state management

const FilterPanel = () => {

    return (
        <div className="filter-panel">
            <h2>Filter by Category</h2>
            <div className="filter-options">
                <label>
                    <input type="checkbox" value="igneous" />
                    Igneous
                </label>
                <label>
                    <input type="checkbox" value="sedimentary" />
                    Sedimentary
                </label>
                <label>
                    <input type="checkbox" value="metamorphic" />
                    Metamorphic
                </label>
            </div>
        </div>
    );
};

export default FilterPanel;