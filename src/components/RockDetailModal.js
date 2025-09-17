// prop rock is being passed in from RockGallery.js for rock details
// prop onClose is being passed in from RockGallery.js for closing the modal
// prop onAddToCollection is being passed in from RockGallery.js for adding rock to collection
const RockDetailModal = ( {rock, collection, onClose, onAddToCollection, onRemoveFromCollection} ) => {
    // If no rock is provided, don't render the modal
    if (!rock) return null;

    // Check if the rock is already in the collection
    const isInCollection = Array.isArray(collection) && collection.some(r => r.id === rock.id);

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>

                <button className="close-button" onClick={onClose}>×</button>

                {rock.image && (
                    <img
                        src={rock.image}
                        alt={rock.name}
                        className="rock-image"
                    />
                )}
                
                <h2>{rock.name}</h2>
                <p><strong>Category:</strong> {rock.category}</p>
                <p><strong>Type:</strong> {rock.type}</p>
                <p><strong>Color:</strong> {rock.color}</p>
                <p><strong>Texture:</strong> {rock.texture}</p>
                <p><strong>Fun Fact:</strong> {rock.funFact}</p>

                {isInCollection ? (
                <button className="collect-button" onClick={onRemoveFromCollection}>Remove from Collection</button>
                ) : (
                <button className="collect-button" onClick={onAddToCollection}>Add to Collection</button>
                )}

            </div>
        </div>
    );
};

export default RockDetailModal;