import { Button, Flex } from 'antd';
import SectionTitle from '../SectionTitle';

function ButtonExamples() {
  return (
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
  );
}

export default ButtonExamples;
