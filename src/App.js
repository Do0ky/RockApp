import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  return (
    <div className="app-container">

      <div className="home-background" /> {/* purely visual layer self-closing */}

      <Header />

      <div className="homepage text-center"> {/* main content container */}

        <div className="entry-options"> {/* flex container entry cards */}

          <div className='entry-card' onClick={() => navigate('/gallery')}>
            <h2>Enter Rock Gallery</h2>
          </div>

          <div className='entry-card' onClick={() => navigate('/quiz')}>
            <h2>Start Quiz Mode</h2>
          </div>
          
        </div>

      </div>

      <Footer />

    </div>
  );
}

export default App;