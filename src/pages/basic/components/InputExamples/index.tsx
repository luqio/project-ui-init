import { Flex, Input } from 'antd';
import SectionTitle from '../SectionTitle';
import styles from './index.module.less';

function InputExamples() {
  return (
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
        <Input status="warning" placeholder="warning" className={styles.w180} />
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
  );
}

export default InputExamples;
