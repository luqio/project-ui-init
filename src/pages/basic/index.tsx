import { Flex } from 'antd';
import ButtonExamples from './components/ButtonExamples';
import DropdownExamples from './components/DropdownExamples';
import InputExamples from './components/InputExamples';
import LoadingExamples from './components/LoadingExamples';
import ModalExamples from './components/ModalExamples';
import PaginationExamples from './components/PaginationExamples';
import SelectExamples from './components/SelectExamples';
import StepsExamples from './components/StepsExamples';
import SwitchExamples from './components/SwitchExamples';
import TabsExamples from './components/TabsExamples';
import styles from './index.module.less';

function BasicPage() {
  return (
    <Flex vertical align="flex-start" gap={28} className={styles.page}>
      <ButtonExamples />
      <ModalExamples />
      <SelectExamples />
      <InputExamples />
      <TabsExamples />
      <SwitchExamples />
      <LoadingExamples />
      <DropdownExamples />
      <PaginationExamples />
      <StepsExamples />
    </Flex>
  );
}

export default BasicPage;
