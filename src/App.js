import RockCard from "./components/RockCard";
import rocks from "./data/rocks.json"; // Importing the JSON data file

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
      <h1 class="text-center">Rock App</h1>
      {rocks.map( r => <RockCard key={r.id} rock={r} /> ) /* Mapping through the rocks array and creating a RockCard for each rock object */ }
    </div>
  );
}
// rock is an attribute of RockCard => the parameter r is getting put into the prop called rock on the RockCard component
// This r parameter will be given to each RockCard it creates by mapping, in a rock prop. And then it can be accessed in the RockCard component

export default App;