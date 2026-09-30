import { Flex, Steps } from 'antd';
import SectionTitle from '../SectionTitle';
import styles from './index.module.less';

const stepItems = [
  { title: '已完成', description: '说明' },
  { title: '进行中', description: '说明' },
  { title: '出错', description: '说明', status: 'error' as const },
  { title: '等待', description: '说明' },
];

function StepsExamples() {
  return (
    <Flex vertical gap={16} className={styles.full}>
      <SectionTitle>Steps</SectionTitle>
      <Steps current={1} items={stepItems} />
      <Steps current={1} type="navigation" items={stepItems} />
      <Steps current={1} type="inline" items={stepItems} />
      <Steps current={1} type="panel" items={stepItems} />
      <Steps current={1} type="dot" items={stepItems} />
      <Steps current={1} orientation="vertical" items={stepItems} />
    </Flex>
  );
}

export default StepsExamples;
