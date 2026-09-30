import { Typography } from 'antd';
import globalCss from '@/styles/global.css?raw';
import styles from './index.module.less';

const cards = [
  { id: 'weekly', title: '周报生成', description: '按本周事项整理成周报。' },
  { id: 'meeting', title: '会议纪要', description: '把讨论整理成结论和待办。' },
  { id: 'mail', title: '邮件起草', description: '按对象和目的写一封邮件。' },
  { id: 'summary', title: '长文摘要', description: '抽出要点，保留原文结构。' },
  {
    id: 'translate',
    title: '中英互译',
    description: '保留术语，译成另一种语言。',
  },
  { id: 'outline', title: '大纲整理', description: '把素材收成可讲的提纲。' },
  { id: 'review', title: '文案校对', description: '改语病，标出含糊的句子。' },
  { id: 'faq', title: '问答整理', description: '把零散问题收成问答列表。' },
  { id: 'plan', title: '计划拆解', description: '把目标拆成可执行的步骤。' },
  { id: 'note', title: '备忘归档', description: '给记录补上标题和分类。' },
];

function GlobalPage() {
  return (
    <div className={styles.page}>
      <section className={styles.section}>
        <Typography.Title level={5} className={styles.title}>
          视口
        </Typography.Title>
        <p className={styles.text}>
          整个页面最小
          1040×700。正常视口只滚动内容区，左侧导航不动。更小时滚动整个页面。
        </p>
      </section>

      <section className={styles.section}>
        <Typography.Title level={5} className={styles.title}>
          滚动条
        </Typography.Title>
        <p className={styles.text}>
          滑块 7px，圆角 20px，颜色跟随文字三级色。下面这块区域可以滚动。
        </p>
        <div className={styles.scrollBox}>
          <p className={styles.scrollLine}>第一行。滚动条在这块区域的右侧。</p>
          <p className={styles.scrollLine}>第二行。悬停时滑块会更深一点。</p>
          <p className={styles.scrollLine}>第三行。轨道保持透明。</p>
          <p className={styles.scrollLine}>第四行。横向和纵向用同一套样式。</p>
          <p className={styles.scrollLine}>
            第五行。内容继续向下，用来撑出滚动距离。
          </p>
          <p className={styles.scrollLine}>第六行。到这里可以滚到底。</p>
        </div>
      </section>

      <section className={styles.section}>
        <Typography.Title level={5} className={styles.title}>
          卡片列表
        </Typography.Title>
        <p className={styles.text}>
          类名 card-grid。小于 1280px 为 2 列，1280–1439 为 3 列，1440–1919 为 4
          列，1920px 及以上为 5 列。断点按浏览器宽度计算。
        </p>
        <div className="card-grid">
          {cards.map(card => (
            <article key={card.id} className={styles.card}>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardDescription}>{card.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <Typography.Title level={5} className={styles.title}>
          代码
        </Typography.Title>
        <p className={styles.text}>
          下面是 src/styles/global.css。页面读的是这份文件，改这里即可。
        </p>
        <pre className={styles.code}>{globalCss}</pre>
      </section>
    </div>
  );
}

export default GlobalPage;
