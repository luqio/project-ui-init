import { Flex, Select } from 'antd';
import SectionTitle from '../SectionTitle';
import styles from './index.module.less';

const selectOptions = [
  { value: 'a', label: '选项 A' },
  { value: 'b', label: '选项 B' },
  { value: 'c', label: '选项 C' },
];

function SelectExamples() {
  return (
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
  );
}

export default SelectExamples;
