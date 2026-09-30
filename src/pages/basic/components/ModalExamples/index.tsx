import { App, Button, Flex, Form, Input, Modal, Typography } from 'antd';
import { useState } from 'react';
import { getErrorMessage } from '@/utils/error';
import SectionTitle from '../SectionTitle';

interface ProjectFormValues {
  name: string;
  note?: string;
}

type NoticeType = 'info' | 'success' | 'warning' | 'error';

const SUBMIT_DELAY_MS = 600;

const noticeContent: Record<NoticeType, { title: string; content: string }> = {
  info: { title: '说明', content: '这是一条信息。' },
  success: { title: '成功', content: '操作已完成。' },
  warning: { title: '警告', content: '请确认后再继续。' },
  error: { title: '错误', content: '操作没有完成。' },
};

function wait(ms: number) {
  return new Promise<void>(resolve => {
    setTimeout(resolve, ms);
  });
}

function ModalExamples() {
  const { message, modal } = App.useApp();
  const [form] = Form.useForm<ProjectFormValues>();
  const [basicOpen, setBasicOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  const [loadingOpen, setLoadingOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  function closeForm() {
    if (submitting) {
      return;
    }
    setFormOpen(false);
  }

  async function handleFinish(values: ProjectFormValues) {
    setSubmitting(true);
    try {
      await wait(SUBMIT_DELAY_MS);
      if (values.name.trim() === '失败') {
        throw new Error('保存失败');
      }
      message.success('已保存');
      setFormOpen(false);
    } catch (error) {
      message.error(getErrorMessage(error, '保存失败'));
    } finally {
      setSubmitting(false);
    }
  }

  function confirmDelete() {
    modal.confirm({
      title: '删除这条记录？',
      content: '删除后不可恢复。',
      okText: '删除',
      okType: 'danger',
      cancelText: '取消',
      onOk() {
        message.success('已删除');
      },
    });
  }

  function showNotice(type: NoticeType) {
    const notice = noticeContent[type];
    modal[type]({
      title: notice.title,
      content: notice.content,
      okText: '知道了',
    });
  }

  return (
    <Flex vertical align="flex-start" gap={12}>
      <SectionTitle>Modal</SectionTitle>
      <Flex gap={8} wrap>
        <Button onClick={() => setBasicOpen(true)}>基础</Button>
        <Button onClick={() => setFormOpen(true)}>表单</Button>
        <Button onClick={() => confirmDelete()}>删除确认</Button>
        <Button onClick={() => setLoadingOpen(true)}>加载中</Button>
        <Button onClick={() => showNotice('info')}>信息</Button>
        <Button onClick={() => showNotice('success')}>成功</Button>
        <Button onClick={() => showNotice('warning')}>警告</Button>
        <Button onClick={() => showNotice('error')}>错误</Button>
      </Flex>
      <Typography.Text type="secondary">
        表单里名称填「失败」会提交失败，弹层保持打开。
      </Typography.Text>
      <Modal
        title="Modal"
        open={basicOpen}
        okText="确定"
        cancelText="取消"
        onOk={() => setBasicOpen(false)}
        onCancel={() => setBasicOpen(false)}
      >
        只有 Modal 使用 8px 圆角。
      </Modal>
      <Modal
        title="新建项目"
        open={formOpen}
        okText="保存"
        cancelText="取消"
        confirmLoading={submitting}
        destroyOnHidden
        maskClosable={false}
        keyboard={!submitting}
        closable={{ disabled: submitting }}
        cancelButtonProps={{ disabled: submitting }}
        styles={{ body: { padding: 0 } }}
        onOk={() => form.submit()}
        onCancel={() => closeForm()}
        afterClose={() => form.resetFields()}
      >
        <Form<ProjectFormValues>
          form={form}
          layout="vertical"
          scrollToFirstError
          onFinish={values => {
            void handleFinish(values);
          }}
        >
          <Form.Item
            label="名称"
            name="name"
            rules={[
              { required: true, whitespace: true, message: '请输入名称' },
            ]}
          >
            <Input placeholder="输入「失败」可模拟提交失败" />
          </Form.Item>
          <Form.Item label="说明" name="note">
            <Input.TextArea rows={3} placeholder="选填" />
          </Form.Item>
        </Form>
      </Modal>
      <Modal
        title="加载中"
        loading
        open={loadingOpen}
        okText="确定"
        cancelText="取消"
        onOk={() => setLoadingOpen(false)}
        onCancel={() => setLoadingOpen(false)}
      >
        内容加载完成后显示。
      </Modal>
    </Flex>
  );
}

export default ModalExamples;
