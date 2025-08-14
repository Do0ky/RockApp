
function RockCard(props) {
    return (
        <div>
            <h3>{props.rock.name}</h3>
            <h5>{props.rock.category}</h5>
            <p>{props.rock.type}</p>
        </div>
    )
}

export default RockCard;