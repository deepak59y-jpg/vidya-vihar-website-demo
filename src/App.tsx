import { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

// Priority 1 Pages
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Admissions } from './pages/Admissions';
import { Contact } from './pages/Contact';

// Priority 2 Pages
import { Academics } from './pages/Academics';
import { Gallery } from './pages/Gallery';

// Priority 3 Pages
import { Facilities } from './pages/Facilities';
import { NewsNotices } from './pages/NewsNotices';

function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');

  const handlePageChange = (page: string) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={handlePageChange} />;
      case 'about':
        return <About />;
      case 'admissions':
        return <Admissions />;
      case 'contact':
        return <Contact />;
      case 'academics':
        return <Academics />;
      case 'gallery':
        return <Gallery />;
      case 'facilities':
        return <Facilities />;
      case 'news':
        return <NewsNotices />;
      default:
        return <Home onNavigate={handlePageChange} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header currentPage={currentPage} onPageChange={handlePageChange} />
      
      <main className="flex-grow">
        {renderPage()}
      </main>

      <Footer onPageChange={handlePageChange} />
      <WhatsAppButton />
    </div>
  );
}

export default App;
