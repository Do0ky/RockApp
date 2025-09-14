// This component will act as a central hub for managing our collection state and passing it to both RockGallery and Collection components.
// It will also handle adding rocks to the collection and ensuring no duplicates are added.

import { useState } from "react";
import RockGallery from "../pages/RockGallery";
import RockCollection from "../pages/RockCollection";

const CollectionManager = () => {
    // 1st: own the collection state here
    const [collection, setCollection] = useState([]);
    const [view, setView] = useState("gallery"); // "gallery" or "collection"

    // 2nd: provide addToCollection and removeFromCollection functions to RockGallery
    // Function to add to the collection array
    const addToCollection = (rock) => {
        setCollection( (prev) => {
            const alreadyAdded = prev.some( (r) => r.id === rock.id); // Prevent duplicates
            return alreadyAdded ? prev : [...prev, rock]; // Add rock if not already in collection
        });
    };
    // Function to remove from the collection array
    const removeFromCollection = (rock) => {
        setCollection( (prev) => prev.filter( (r) => r.id !== rock.id) ); // Remove rock by filtering it out
    };

    // 3rd: render gallery or collection based on some condition
    // 4th: pass down the collection and handlers as props
    return (
        <>  
            {view === "gallery" && (
                <RockGallery
                addToCollection={addToCollection}
                removeFromCollection={removeFromCollection}
                collection={collection}
                goToCollection={() => setView("collection")}
                />
            )}

            {view === "collection" && (
                <RockCollection
                collection={collection}
                removeFromCollection={removeFromCollection}
                goToGallery={() => setView("gallery")}
                />
            )}
        </>
    );
};

export default CollectionManager;