import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '@/pages/home';

interface RouteComponentProps {
  isDark: boolean;
  onThemeChange: (isDark: boolean) => void;
}

function RouteComponent({ isDark, onThemeChange }: RouteComponentProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={<HomePage isDark={isDark} onThemeChange={onThemeChange} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default RouteComponent;
