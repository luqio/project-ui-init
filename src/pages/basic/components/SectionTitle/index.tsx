import { Typography } from 'antd';
import styles from './index.module.less';

interface SectionTitleProps {
  children: string;
}

function SectionTitle({ children }: SectionTitleProps) {
  return (
    <Typography.Title level={5} className={styles.sectionTitle}>
      {children}
    </Typography.Title>
  );
}

export default SectionTitle;
