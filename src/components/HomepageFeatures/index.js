import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    emoji: '\u{1F4DD}',
    title: '기록하는 개발',
    description:
      '배운 것을 문서로 정리하고, 나만의 지식 베이스를 쌓아갑니다. 기록은 가장 확실한 학습 방법입니다.',
  },
  {
    emoji: '\u{1F680}',
    title: '꾸준한 성장',
    description:
      '작은 것이라도 매일 조금씩 발전하는 것을 목표로 합니다. 블로그는 그 여정의 발자취입니다.',
  },
  {
    emoji: '\u{1F4E1}',
    title: '지식 공유',
    description:
      '삽질했던 경험, 해결했던 문제들을 공유합니다. 누군가에게 도움이 되는 글을 쓰고 싶습니다.',
  },
];

function Feature({emoji, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className={styles.featureCard}>
        <span className={styles.featureEmoji}>{emoji}</span>
        <Heading as="h3" className={styles.featureTitle}>{title}</Heading>
        <p className={styles.featureDescription}>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
