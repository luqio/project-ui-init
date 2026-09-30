import { Flex, Tabs } from 'antd';
import SectionTitle from '../SectionTitle';
import styles from './index.module.less';

const tabItems = [
  { key: '1', label: '标签一', children: '内容一' },
  { key: '2', label: '标签二', children: '内容二' },
  { key: '3', label: '标签三', children: '内容三' },
];

function TabsExamples() {
  return (
    <Flex vertical gap={12} className={styles.full}>
      <SectionTitle>Tabs</SectionTitle>
      <Tabs items={tabItems} />
      <Tabs type="card" items={tabItems} />
      <Tabs type="editable-card" items={tabItems} />
      <Tabs size="small" items={tabItems} />
      <Tabs size="large" items={tabItems} />
    </Flex>
  );
}

export default TabsExamples;
