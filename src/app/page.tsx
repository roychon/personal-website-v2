import styles from "./page.module.css";
import Footer from "@/shared/components/footer/component";
import BubbleTexts from "@/shared/components/bubble-texts/component";
import { nameBubbleChars, projectEntries, workEntries } from "./constants";

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.hero}>
        <nav className={styles.topLinks} aria-label="Primary">
          <a href="https://www.linkedin.com/in/roychon/">resume</a>
          <span className={styles.topSep} aria-hidden>
            /
          </span>
          <a href="https://github.com/roychon">source</a>
        </nav>

        <h1 className={styles.name}>
          <BubbleTexts chars={nameBubbleChars} />
        </h1>
        <p className={styles.meta}>
          CS @ Waterloo
          <span className={styles.metaDot} aria-hidden>
            ·
          </span>
          Canada
          <span className={styles.metaDot} aria-hidden>
            ·
          </span>
          Seeking 2026 SWE internships
        </p>
        <p className={styles.tagline}>
          Computer science at the <a href="https://uwaterloo.ca/">University of Waterloo</a>, with interests in distributed systems and machine learning. Recently wrapped up my third year and I&apos;m
          seeking software engineering internships for 2026.
        </p>
      </header>

      <main className={styles.main}>
        <section className={styles.section} aria-labelledby="experience-heading">
          <h2 id="experience-heading" className={styles.sectionTitle}>
            <span className={styles.sectionLabel}>experience</span>
          </h2>
          <ul className={styles.list}>
            {workEntries.map((job) => (
              <li key={`${job.org}-${job.period}`} className={styles.workCard}>
                <div className={styles.workTop}>
                  {/* eslint-disable-next-line @next/next/no-img-element -- local SVG marks */}
                  <img className={styles.workLogo} src={job.logoSrc} alt="" width={44} height={44} loading="lazy" decoding="async" />
                  <div className={styles.workBody}>
                    <div className={styles.workTitleRow}>
                      <span className={styles.workOrg}>{job.orgUrl ? <a href={job.orgUrl}>{job.org}</a> : job.org}</span>
                      <span className={styles.workPeriod}>{job.period}</span>
                    </div>
                    <p className={styles.workTitle}>{job.title}</p>
                    <p className={styles.workDetail}>{job.detail}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.section} aria-labelledby="projects-heading">
          <h2 id="projects-heading" className={styles.sectionTitle}>
            <span className={styles.sectionLabel}>projects</span>
          </h2>
          <ul className={styles.list}>
            {projectEntries.map((p) => (
              <li key={p.name} className={styles.projectCard}>
                <div className={styles.projectTop}>
                  <span className={styles.projectName}>{p.name}</span>
                  <span className={styles.projectStack}>{p.stack}</span>
                </div>
                <p className={styles.projectBlurb}>{p.blurb}</p>
              </li>
            ))}
          </ul>
        </section>

        <p className={styles.updated}>Last updated: April 2026</p>
      </main>

      <Footer />
    </div>
  );
}
