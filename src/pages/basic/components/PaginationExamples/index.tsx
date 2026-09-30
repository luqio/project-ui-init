import { Flex, Pagination } from 'antd';
import SectionTitle from '../SectionTitle';
import styles from './index.module.less';

function PaginationExamples() {
  return (
    <Flex vertical align="flex-start" gap={12} className={styles.full}>
      <SectionTitle>Pagination</SectionTitle>
      <Pagination total={50} />
      <Pagination total={50} size="small" />
      <Pagination total={50} simple />
      <Pagination total={50} disabled />
      <Pagination total={500} showSizeChanger showQuickJumper />
    </Flex>
  );
}

export default PaginationExamples;
