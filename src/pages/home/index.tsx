import {
  Button,
  Dropdown,
  Flex,
  Input,
  Pagination,
  Select,
  Spin,
  Steps,
  Switch,
  Tabs,
  Typography,
} from 'antd';
import ModalExamples from './components/ModalExamples';
import styles from './index.module.css';

interface HomePageProps {
  isDark: boolean;
  onThemeChange: (isDark: boolean) => void;
}

const selectOptions = [
  { value: 'a', label: '选项 A' },
  { value: 'b', label: '选项 B' },
  { value: 'c', label: '选项 C' },
];

const tabItems = [
  { key: '1', label: '标签一', children: '内容一' },
  { key: '2', label: '标签二', children: '内容二' },
  { key: '3', label: '标签三', children: '内容三' },
];

const menuItems = [
  { key: '1', label: '菜单项一' },
  { key: '2', label: '菜单项二' },
  { key: '3', label: '菜单项三', danger: true },
];

const stepItems = [
  { title: '已完成', description: '说明' },
  { title: '进行中', description: '说明' },
  { title: '出错', description: '说明', status: 'error' as const },
  { title: '等待', description: '说明' },
];

function SectionTitle({ children }: { children: string }) {
  return (
    <Typography.Title level={5} className={styles.sectionTitle}>
      {children}
    </Typography.Title>
  );
}

function HomePage({ isDark, onThemeChange }: HomePageProps) {
  return (
    <Flex vertical align="flex-start" gap={28} className={styles.page}>
      <Flex align="center" gap={8}>
        <Typography.Title level={4} className={styles.pageTitle}>
          project-init
        </Typography.Title>
        <span>深色</span>
        <Switch checked={isDark} onChange={onThemeChange} />
      </Flex>

      <Flex vertical align="flex-start" gap={12}>
        <SectionTitle>Button</SectionTitle>
        <Flex gap={8} wrap>
          <Button type="primary">primary</Button>
          <Button type="default">default</Button>
          <Button type="dashed">dashed</Button>
          <Button type="text">text</Button>
          <Button type="link">link</Button>
        </Flex>
        <Flex gap={8} wrap>
          <Button type="primary" danger>
            primary danger
          </Button>
          <Button danger>default danger</Button>
          <Button type="primary" disabled>
            disabled
          </Button>
          <Button type="primary" loading>
            loading
          </Button>
          <Button type="primary" ghost>
            ghost
          </Button>
        </Flex>
        <Flex gap={8} wrap align="center">
          <Button type="primary" size="small">
            small
          </Button>
          <Button type="primary" size="middle">
            middle
          </Button>
          <Button type="primary" size="large">
            large
          </Button>
          <Button type="primary" shape="round">
            round
          </Button>
          <Button type="primary" shape="circle">
            A
          </Button>
        </Flex>
        <Flex gap={8} wrap>
          <Button color="primary" variant="solid">
            solid
          </Button>
          <Button color="primary" variant="outlined">
            outlined
          </Button>
          <Button color="primary" variant="dashed">
            dashed
          </Button>
          <Button color="primary" variant="filled">
            filled
          </Button>
          <Button color="primary" variant="text">
            text
          </Button>
          <Button color="primary" variant="link">
            link
          </Button>
        </Flex>
      </Flex>

      <Flex vertical align="flex-start" gap={12}>
        <SectionTitle>Modal</SectionTitle>
        <ModalExamples />
      </Flex>

      <Flex vertical align="flex-start" gap={12}>
        <SectionTitle>Select</SectionTitle>
        <Flex gap={8} wrap>
          <Select
            placeholder="单选"
            className={styles.w160}
            options={selectOptions}
          />
          <Select
            mode="multiple"
            placeholder="多选"
            className={styles.w220}
            options={selectOptions}
          />
          <Select
            mode="tags"
            placeholder="标签"
            className={styles.w220}
            options={selectOptions}
          />
          <Select
            showSearch
            placeholder="可搜索"
            className={styles.w160}
            options={selectOptions}
          />
          <Select
            allowClear
            placeholder="可清除"
            className={styles.w160}
            options={selectOptions}
            defaultValue="a"
          />
        </Flex>
        <Flex gap={8} wrap>
          <Select
            disabled
            placeholder="禁用"
            className={styles.w160}
            options={selectOptions}
          />
          <Select
            status="warning"
            placeholder="warning"
            className={styles.w160}
            options={selectOptions}
          />
          <Select
            status="error"
            placeholder="error"
            className={styles.w160}
            options={selectOptions}
          />
          <Select
            size="small"
            placeholder="small"
            className={styles.w140}
            options={selectOptions}
          />
          <Select
            size="middle"
            placeholder="middle"
            className={styles.w140}
            options={selectOptions}
          />
          <Select
            size="large"
            placeholder="large"
            className={styles.w140}
            options={selectOptions}
          />
        </Flex>
      </Flex>

      <Flex vertical align="flex-start" gap={12}>
        <SectionTitle>Input</SectionTitle>
        <Flex gap={8} wrap>
          <Input placeholder="默认" className={styles.w180} />
          <Input.Password placeholder="密码" className={styles.w180} />
          <Input.Search placeholder="搜索" className={styles.w220} />
          <Input.TextArea placeholder="多行" className={styles.w220} rows={1} />
        </Flex>
        <Flex gap={8} wrap>
          <Input disabled placeholder="禁用" className={styles.w180} />
          <Input
            status="warning"
            placeholder="warning"
            className={styles.w180}
          />
          <Input status="error" placeholder="error" className={styles.w180} />
          <Input
            addonBefore="https://"
            placeholder="前后缀"
            className={styles.w240}
          />
        </Flex>
        <Flex gap={8} wrap>
          <Input size="small" placeholder="small" className={styles.w140} />
          <Input size="middle" placeholder="middle" className={styles.w140} />
          <Input size="large" placeholder="large" className={styles.w140} />
        </Flex>
      </Flex>

      <Flex vertical gap={12} className={styles.full}>
        <SectionTitle>Tabs</SectionTitle>
        <Tabs items={tabItems} />
        <Tabs type="card" items={tabItems} />
        <Tabs type="editable-card" items={tabItems} />
        <Tabs size="small" items={tabItems} />
        <Tabs size="large" items={tabItems} />
      </Flex>

      <Flex vertical align="flex-start" gap={12}>
        <SectionTitle>Switch</SectionTitle>
        <Flex gap={16} wrap align="center">
          <Switch defaultChecked />
          <Switch />
          <Switch checkedChildren="开" unCheckedChildren="关" defaultChecked />
          <Switch size="small" defaultChecked />
          <Switch loading defaultChecked />
          <Switch disabled />
          <Switch disabled defaultChecked />
        </Flex>
      </Flex>

      <Flex vertical align="flex-start" gap={12}>
        <SectionTitle>Loading</SectionTitle>
        <Flex gap={24} wrap align="center">
          <Spin size="small" />
          <Spin />
          <Spin size="large" />
          <Spin description="加载中" />
          <Spin spinning>
            <div className={styles.spinContent}>包裹内容</div>
          </Spin>
        </Flex>
      </Flex>

      <Flex vertical align="flex-start" gap={12}>
        <SectionTitle>Dropdown</SectionTitle>
        <Flex gap={8} wrap>
          <Dropdown menu={{ items: menuItems }}>
            <Button>hover</Button>
          </Dropdown>
          <Dropdown menu={{ items: menuItems }} trigger={['click']}>
            <Button>click</Button>
          </Dropdown>
          <Dropdown menu={{ items: menuItems }} trigger={['contextMenu']}>
            <Button>contextMenu</Button>
          </Dropdown>
          <Dropdown.Button menu={{ items: menuItems }}>
            按钮菜单
          </Dropdown.Button>
          <Dropdown.Button menu={{ items: menuItems }} type="primary">
            primary
          </Dropdown.Button>
        </Flex>
      </Flex>

      <Flex vertical align="flex-start" gap={12} className={styles.full}>
        <SectionTitle>Pagination</SectionTitle>
        <Pagination total={50} />
        <Pagination total={50} size="small" />
        <Pagination total={50} simple />
        <Pagination total={50} disabled />
        <Pagination total={500} showSizeChanger showQuickJumper />
      </Flex>

      <Flex vertical gap={16} className={styles.full}>
        <SectionTitle>Steps</SectionTitle>
        <Steps current={1} items={stepItems} />
        <Steps current={1} type="navigation" items={stepItems} />
        <Steps current={1} type="inline" items={stepItems} />
        <Steps current={1} type="panel" items={stepItems} />
        <Steps current={1} type="dot" items={stepItems} />
        <Steps current={1} orientation="vertical" items={stepItems} />
      </Flex>
    </Flex>
  );
}

export default HomePage;
