import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {news, profile} from '../data/profile';
import {publications} from '../data/publications';
import styles from './index.module.css';

function Icon({name}) {
  const paths = {
    location: <><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
    github: <><path d="M9 19c-4.3 1.3-4.3-2-6-2.5M15 22v-3.4a3 3 0 0 0-.8-2.4c2.7-.3 5.6-1.3 5.6-6A4.7 4.7 0 0 0 18.5 7a4.3 4.3 0 0 0-.1-3.2S17.4 3.5 15 5a11 11 0 0 0-6 0C6.6 3.5 5.6 3.8 5.6 3.8A4.3 4.3 0 0 0 5.5 7a4.7 4.7 0 0 0-1.3 3.3c0 4.6 2.9 5.6 5.6 5.9a3 3 0 0 0-.8 2.4V22" /></>,
    email: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 6 9 7 9-7" /></>,
    linkedin: <><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M7 10v7M11 17v-7m0 3a3 3 0 0 1 6 0v4" /><circle cx="7" cy="7" r=".5" /></>,
  };

  return (
    <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}

function ProfileSidebar() {
  return (
    <aside className={styles.sidebar} aria-label="Profile">
      <img
        src={useBaseUrl('/img/profile.jpeg')}
        alt={profile.name}
        width="180"
        height="180"
        className={styles.profileImage}
        fetchPriority="high"
      />
      <div className={styles.profileDetails}>
        <h2 className={styles.profileName}>{profile.name}</h2>
        <p className={styles.profileRole}>{profile.role}</p>
        <ul className={styles.profileLinks}>
          <li><Icon name="location" /><span>{profile.location}</span></li>
          <li><Icon name="github" /><a href={profile.github}>GitHub</a></li>
          {profile.linkedin && (
            <li><Icon name="linkedin" /><a href={profile.linkedin}>LinkedIn</a></li>
          )}
          {profile.email && (
            <li><Icon name="email" /><a href={`mailto:${profile.email}`}>Email</a></li>
          )}
        </ul>
      </div>
    </aside>
  );
}

function NewsSection() {
  if (news.length === 0) return null;

  return (
    <section className={styles.section} aria-labelledby="latest-news">
      <Heading as="h2" id="latest-news" className={styles.sectionTitle}>Latest News</Heading>
      <ul className={styles.newsList}>
        {news.map((item) => (
          <li key={`${item.date}-${item.text}`} className={styles.newsItem}>
            <time dateTime={item.date}>
              {new Intl.DateTimeFormat('en', {month: 'short', year: 'numeric', timeZone: 'UTC'}).format(new Date(`${item.date}-01T00:00:00Z`))}
            </time>
            <span>{item.text}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function PublicationsSection() {
  return (
    <section className={styles.section} aria-labelledby="publications">
      <Heading as="h2" id="publications" className={styles.sectionTitle}>Publications</Heading>
      <ol className={styles.publications}>
        {publications.map((paper) => (
          <li key={paper.id} className={styles.publication}>
            <a href={paper.video} className={styles.publicationImageLink} aria-label={`Watch the research video for ${paper.title}`}>
              <img src={paper.thumbnail} alt={`${paper.title} — video thumbnail`} width="320" height="180" loading="lazy" decoding="async" className={styles.publicationImage} />
            </a>
            <div className={styles.publicationBody}>
              <p className={styles.publicationVenue}>{paper.venue}</p>
              <h3 className={styles.publicationTitle}>
                <a href={`https://doi.org/${paper.doi}`}>{paper.title}</a>
              </h3>
              <p className={styles.publicationAuthors}>
                {paper.authors.map((author, index) => (
                  <span key={author.name}>
                    {index > 0 && ', '}
                    {author.self ? <strong>{author.name}</strong> : author.name}
                  </span>
                ))}
              </p>
              <p className={styles.publicationDetails}>{paper.details}</p>
              <p className={styles.publicationSummary}>{paper.summary}</p>
              <ul className={styles.publicationLinks} aria-label={`Resources for ${paper.title}`}>
                <li><a href={`https://doi.org/${paper.doi}`}>[paper]</a></li>
                <li><a href={paper.video}>[video]</a></li>
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

export default function Home() {
  return (
    <Layout title="About" description="DongHyeon Kang — interested in human–AI collaboration and sensing technologies using novel form factors. Co-author of EcoTailor and CapWear.">
      <main className={styles.mainContainer}>
        <ProfileSidebar />
        <article className={styles.mainContent}>
          <section className={styles.section} aria-labelledby="about">
            <Heading as="h1" id="about" className={styles.pageTitle}>About Me</Heading>
            <p>
              Hello! I’m <strong>{profile.name}</strong>, a developer based in South Korea.
              I enjoy learning, building, and sharing what I discover along the way.
            </p>
            <p>
              I’m interested in <strong>human–AI collaboration</strong> and{' '}
              <strong>sensing technologies that use novel form factors</strong>.
              I use this space to share my work, document what I learn, and
              reflect on my experiences.
            </p>
            <p>
              I have also contributed to <a href="#publications">research on
              personalized low-carbon planning and wearable health sensing</a>,
              including EcoTailor and CapWear.
            </p>
          </section>

          <PublicationsSection />

          <section className={styles.section} aria-labelledby="interests">
            <Heading as="h2" id="interests" className={styles.sectionTitle}>Interests</Heading>
            <ul className={styles.interests}>
              {profile.interests.map((interest) => <li key={interest}>{interest}</li>)}
            </ul>
          </section>

          <NewsSection />
        </article>
      </main>
    </Layout>
  );
}
