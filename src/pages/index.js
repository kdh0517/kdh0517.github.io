import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

import styles from './index.module.css';

const NEWS_ITEMS = [
  // { date: 'Mar 2026', text: 'Started this website!', bold: false },
];

const SOCIAL_LINKS = [
  {
    icon: '🔗',
    label: 'GitHub',
    href: 'https://github.com/kdh0517',
  },
  {
    icon: '✉️',
    label: 'Email',
    href: 'mailto:your-email@example.com',
  },
];

function ProfileSidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.profileImageWrapper}>
        <img
          src="/img/profile.jpeg"
          alt="Profile"
          className={styles.profileImage}
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />
      </div>
      <h2 className={styles.profileName}>DongHyeon Kang</h2>
      <p className={styles.profileTitle}>Developer</p>
      <p className={styles.profileLocation}>South Korea</p>

      <div className={styles.socialLinks}>
        {SOCIAL_LINKS.map((link, idx) => (
          <a
            key={idx}
            href={link.href}
            className={styles.socialLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className={styles.socialIcon}>{link.icon}</span>
            {link.label}
          </a>
        ))}
      </div>
    </aside>
  );
}

function AboutSection() {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>About</h2>
      <p className={styles.aboutText}>
        안녕하세요! 배우고, 기록하고, 성장하는 개발자 강동현입니다.
        이 블로그에서는 개발하면서 배운 것들을 정리하고 공유합니다.
        기록은 가장 확실한 학습 방법이라 믿고, 꾸준히 글을 쓰고 있습니다.
      </p>
      <p className={styles.aboutText}>
        관심 분야는 웹 개발, 소프트웨어 엔지니어링 등 다양합니다.
        궁금한 점이 있으시면 언제든 연락 주세요!
      </p>
    </section>
  );
}

function NewsSection() {
  if (NEWS_ITEMS.length === 0) return null;

  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Latest News</h2>
      <div className={styles.newsDivider} />
      <div className={styles.newsTable}>
        {NEWS_ITEMS.map((item, idx) => (
          <div key={idx} className={styles.newsRow}>
            <span className={styles.newsDate}>{item.date}</span>
            <span className={item.bold ? styles.newsBoldText : styles.newsText}>
              {item.text}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

function QuickLinks() {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Explore</h2>
      <div className={styles.newsDivider} />
      <div className={styles.quickLinks}>
        <Link to="/docs/intro" className={styles.quickLink}>
          <span className={styles.quickLinkIcon}>📚</span>
          <div>
            <strong>Docs</strong>
            <p>정리된 문서와 가이드를 확인하세요</p>
          </div>
        </Link>
        <Link to="/blog" className={styles.quickLink}>
          <span className={styles.quickLinkIcon}>✏️</span>
          <div>
            <strong>Blog</strong>
            <p>개발 경험과 학습 기록을 읽어보세요</p>
          </div>
        </Link>
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title="Home" description={siteConfig.tagline}>
      <main className={styles.mainContainer}>
        <div className={styles.contentWrapper}>
          <ProfileSidebar />
          <div className={styles.mainContent}>
            <AboutSection />
            <NewsSection />
            <QuickLinks />
          </div>
        </div>
      </main>
    </Layout>
  );
}
