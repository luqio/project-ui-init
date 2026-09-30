import { Flex, Layout, Menu, Switch, Typography } from 'antd';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { specNav } from '@/routes/nav';
import './page-layout.css';

interface PageLayoutProps {
  isDark: boolean;
  onThemeChange: (isDark: boolean) => void;
}

const menuItems = specNav.map(item => ({
  key: item.path,
  label: item.label,
}));

function PageLayout({ isDark, onThemeChange }: PageLayoutProps) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const current = specNav.find(
    item => pathname === item.path || pathname.startsWith(`${item.path}/`),
  );

  return (
    <Layout className="page-layout" hasSider>
      <Layout.Sider width={200} theme="light" className="page-layout__sider">
        <Typography.Title level={5} className="page-layout__brand">
          project-init
        </Typography.Title>
        <Menu
          mode="inline"
          theme="light"
          selectedKeys={current ? [current.path] : []}
          items={menuItems}
          onClick={({ key }) => navigate(key)}
        />
      </Layout.Sider>
      <Layout className="page-layout__main">
        <header className="page-layout__header">
          <Typography.Title level={4} className="page-layout__title">
            {current?.label}
          </Typography.Title>
          <Flex align="center" gap={8}>
            <span>深色</span>
            <Switch checked={isDark} onChange={onThemeChange} />
          </Flex>
        </header>
        <Layout.Content className="page-layout__content">
          <Outlet />
        </Layout.Content>
      </Layout>
    </Layout>
  );
}

export default PageLayout;
