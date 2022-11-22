import DescktopPage from 'pages/Descktop/DescktopPage';
import HomePage from 'pages/Home/HomePage';
import MobilePage from 'pages/Mobile/MobilePage';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/risidio-test" element={<HomePage />} />
        <Route path="/risidio-test/descktop" element={<DescktopPage />} />
        <Route path="/risidio-test/mobile" element={<MobilePage />} />
      </Routes>
    </div>
  );
};
