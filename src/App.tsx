// App.tsx
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ViewPage from './pages/View';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/view/:id" element={<ViewPage />} />
    </Routes>
  );
};

export default App;
