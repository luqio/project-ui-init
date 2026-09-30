import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import PageLayout from '@/components/PageLayout';
import BasicPage from '@/pages/basic';
import GlobalPage from '@/pages/global';

interface RouteComponentProps {
  isDark: boolean;
  onThemeChange: (isDark: boolean) => void;
}

function RouteComponent({ isDark, onThemeChange }: RouteComponentProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={<PageLayout isDark={isDark} onThemeChange={onThemeChange} />}
        >
          <Route index element={<Navigate to="/basic" replace />} />
          <Route path="basic" element={<BasicPage />} />
          <Route path="global" element={<GlobalPage />} />
          <Route path="*" element={<Navigate to="/basic" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default RouteComponent;
