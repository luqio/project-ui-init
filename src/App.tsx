import { useState } from 'react';
import { App as AntdApp, ConfigProvider } from 'antd';
import RouteComponent from './routes';
import { darkTheme, lightTheme } from './theme/theme';

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <ConfigProvider
      theme={isDark ? darkTheme : lightTheme}
      modal={{ centered: true }}
    >
      <AntdApp>
        <RouteComponent isDark={isDark} onThemeChange={setIsDark} />
      </AntdApp>
    </ConfigProvider>
  );
}

export default App;
