/* Tools */
import React from 'react'; 
import ReactDOM from 'react-dom/client'; // Importing ReactDOM for rendering the app
import { BrowserRouter } from 'react-router-dom'; // Importing BrowserRouter for routing
/* Styling */
import './index.css'; // Importing the main CSS file
import 'bootstrap/dist/css/bootstrap.min.css'; // Importing Bootstrap CSS for styling
/* Components */
import App from './App'; // Importing the main App component
import RockGallery from './components/RockGallery'; 
import Quiz from './components/Quiz'; // Placeholder for Quiz component


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/gallery" element={<RockGallery />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);