import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    emoji: '\u{1F4DD}',
    title: 'Learning through writing',
    description:
      'I document what I learn and build a personal knowledge base. Writing helps me deepen my understanding.',
  },
  {
    emoji: '\u{1F680}',
    title: 'Continuous growth',
    description:
      'I aim to make a little progress every day. This blog is a record of that journey.',
  },
  {
    emoji: '\u{1F4E1}',
    title: 'Sharing knowledge',
    description:
      'I share the problems I encounter and how I solve them, hoping these experiences will help others.',
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
