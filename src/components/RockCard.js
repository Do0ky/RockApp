
const RockCard = ( {rock, onClick, onRemove} ) => {
    return (
        <div className="rock-card bg-gradient rounded-2 p-5 m-2" onClick={onClick}>
            <img 
                src={rock.image}
                alt={rock.name} 
                className="img-fluid mb-3" 
            />
            <h3>{rock.name}</h3>
            <h5>{rock.category}</h5>
            <p>{rock.type}</p>

            {onRemove && (
            <button 
                className="remove-button" 
                onClick={(e) => {
                    e.stopPropagation();
                    onRemove();
                }}>
                Remove from Collection
            </button>
            )}
        </div>
    );
};

export default RockCard;