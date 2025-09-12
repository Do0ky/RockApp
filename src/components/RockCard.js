
const RockCard = ( {rock, onClick} ) => {
    return (
        <div className="rock-card text-light bg-dark bg-gradient rounded-2 p-4 m-2" onClick={onClick}>
            <h3>{rock.name}</h3>
            <h5>{rock.category}</h5>
            <p>{rock.type}</p>
        </div>
    );
};

export default RockCard;