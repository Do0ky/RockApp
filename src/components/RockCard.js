
function RockCard(props) {
    return (
        <div className="text-light bg-dark bg-gradient rounded-2 p-4 m-2">
            <h3>{props.rock.name}</h3>
            <h5>{props.rock.category}</h5>
            <p>{props.rock.type}</p>
        </div>
    )
}

export default RockCard;