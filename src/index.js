/* Tools */
import React from 'react'; 
import ReactDOM from 'react-dom/client'; // Importing ReactDOM for rendering the app
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Importing BrowserRouter for routing
/* Styling */
import './index.css'; // Importing the main CSS file
import 'bootstrap/dist/css/bootstrap.min.css'; // Importing Bootstrap CSS for styling
import 'bootstrap-social/bootstrap-social.css';
import 'font-awesome/css/font-awesome.css';
import 'typeface-lobster';
import 'typeface-open-sans';
/* Components */
import App from './App'; // Importing the main App component
import CollectionManager from './components/CollectionManager';
import Quiz from './pages/Quiz'; // Placeholder for Quiz component


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/gallery" element={<CollectionManager />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);