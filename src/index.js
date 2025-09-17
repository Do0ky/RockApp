/* Tools */
import React from 'react'; 
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
/* Styling */
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-social/bootstrap-social.css';
import 'font-awesome/css/font-awesome.css';
import 'typeface-open-sans';
/* Components and Pages */
import App from './App';
import CollectionManager from './components/CollectionManager';
import Quiz from './pages/Quiz';


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