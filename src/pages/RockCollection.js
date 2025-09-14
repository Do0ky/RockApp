import RockCard from "../components/RockCard";
import { useMemo } from "react";

const RockCollection = ( {removeFromCollection, collection, goToGallery} ) => {
  
    /* SORT COLLECTION CARDS BY ALPHABETICAL ORDER */
    const sortedRockCollection = useMemo( () => {
        return [...collection].sort( (a, b) => a.name.localeCompare(b.name) );
    }, [collection]);

    return (
        <div className="rock-collection">
            <h1 className="text-center">Rock Collection</h1>

            <div className="text-center my-3">
                <button className="collection-button" onClick={goToGallery}>
                Back to Gallery
                </button>
            </div>

            <div className="d-flex flex-wrap justify-content-center flex-grow-1">     
                {sortedRockCollection.map( r => 
                <RockCard key={r.id} rock={r} onRemove={() => removeFromCollection(r)}/> )}       
            </div>

        </div>
    );
};

export default RockCollection;