import { useState } from 'react';
import { ConfigProvider } from 'antd';
import RouteComponent from './routes';
import { darkTheme, lightTheme } from './theme/theme';

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <ConfigProvider theme={isDark ? darkTheme : lightTheme}>
      <RouteComponent isDark={isDark} onThemeChange={setIsDark} />
    </ConfigProvider>
  );
}

export default App;
