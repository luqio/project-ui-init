import { Button, Dropdown, Flex } from 'antd';
import SectionTitle from '../SectionTitle';

const menuItems = [
  { key: '1', label: '菜单项一' },
  { key: '2', label: '菜单项二' },
  { key: '3', label: '菜单项三', danger: true },
];

function DropdownExamples() {
  return (
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
        <Dropdown.Button menu={{ items: menuItems }}>按钮菜单</Dropdown.Button>
        <Dropdown.Button menu={{ items: menuItems }} type="primary">
          primary
        </Dropdown.Button>
      </Flex>
    </Flex>
  );
}

export default DropdownExamples;
