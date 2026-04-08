import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage.jsx';
import ReservationsPage from './pages/ReservationsPage.jsx';
import FAQPage from './pages/FAQPage.jsx';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reservations" element={<ReservationsPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-8">Page non trouvée</p>
        <a
          href="/"
          className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-base font-medium text-primary-foreground hover:bg-primary/90 transition-all duration-200"
        >
          Retour à l'accueil
        </a>
      </div>
    </div>
  );
};

export default App;