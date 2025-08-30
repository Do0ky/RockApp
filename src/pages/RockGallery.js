import React from "react";
import rocks from "../data/rocks.json"; // Importing the JSON data file
import RockCard from "../components/RockCard";

function RockGallery() {
    return (
        <div className="rock-gallery">
            <h2 className="text-center">Rock Gallery</h2>
            <div className="d-flex flex-wrap justify-content-center">
                {rocks.map( r => <RockCard key={r.id} rock={r} /> ) /* Mapping through the rocks array and creating a RockCard for each rock object */ }
            </div>
        </div>
    );
};
// rock is an attribute of RockCard => the parameter r is getting put into the prop called rock on the RockCard component
// This r parameter will be given to each RockCard it creates by mapping, in a rock prop. And then it can be accessed in the RockCard component

export default RockGallery;