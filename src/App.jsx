import { Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import Header from './components/Header';
import { Toaster } from 'react-hot-toast';

import Upload from './pages/Upload';
import Font from './pages/Font';
import CreateGroup from './pages/CreateGroup';
import FontGroup from './pages/FontGroup';

const App = () => (
  <>
    <Toaster />
    <div className="min-h-full">
      <NavBar />
      <Header />
      <main>
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<Upload />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/font" element={<Font />} />
            <Route path="/create-group" element={<CreateGroup />} />
            <Route path="/font-group" element={<FontGroup />} />
          </Routes>
        </div>
      </main>
    </div>
  </>
);

export default App;
