import { useNavigate } from "react-router-dom";
import './App.css'; // Importing the CSS file for styling
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  const navigate = useNavigate();

  return (
    <div className="app-container">
      <Header />
      <div className="homepage text-center">
        <h1 className="text-center">Rock App</h1>

          <div className="entry-options">

            <div className='entry-card' onClick={() => navigate('/gallery')}>
              <h2>⛰️ Enter Rock Gallery</h2>
            </div>

            <div className='entry-card' onClick={() => navigate('/quiz')}>
              <h2>❓ Take the Rock Quiz</h2>
            </div>
            
          </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;