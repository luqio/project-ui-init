import { Flex, Switch } from 'antd';
import SectionTitle from '../SectionTitle';

function SwitchExamples() {
  return (
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
  );
}

export default SwitchExamples;
