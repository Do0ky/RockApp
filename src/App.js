//FAKE DATA TEST testing creating an array
const rocksList = [
  {
    id: 0,
    name: "Limestone",
    category: "Sedimentary",
    type: "Chemical"
  },
  {
    id: 1,
    name: "Sandstone",
    category: "Sedimentary",
    type: "Clastic"
  },
    {
    id: 2,
    name: "Chalk",
    category: "Sedimentary",
    type: "Organic"
  }
]

function App() {
  return (
    <div>
      <h1>Rock App</h1>
      {rocksList.map( rock => (
        <div>
        <h3>{rock.name}</h3>
        <h5>{rock.category}</h5>
        <p>{rock.type}</p>
        </div>
        ) ) }
    </div>
  );
}

export default App;
