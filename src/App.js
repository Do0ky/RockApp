import RockCard from "./components/RockCard";

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
      {rocksList.map( r => <RockCard rock={r} /> ) }
    </div>
  );
}
// rock is an attribute of RockCard => the parameter r is getting put into the prop called rock on the RockCard component
// This r parameter will be given to each RockCard it creates by mapping, in a rock prop. And then it can be accessed in the RockCard component

export default App;