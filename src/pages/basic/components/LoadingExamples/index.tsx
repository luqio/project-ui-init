import { Flex, Spin } from 'antd';
import SectionTitle from '../SectionTitle';
import styles from './index.module.less';

function LoadingExamples() {
  return (
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
  );
}

export default LoadingExamples;
