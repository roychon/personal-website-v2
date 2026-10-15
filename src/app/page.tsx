import styles from "./page.module.css";
import BubbleName from "@/shared/components/bubble-name/component";
import Footer from "@/shared/components/footer/component";
import ThemeToggle from "@/shared/components/theme-toggle/component";
import { projectEntries, workEntries } from "./constants";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.top}>
        <span>Roy Chon — 2026</span>
        <nav className={styles.topNav} aria-label="Primary">
          <a href="/Roy_Chon_Resume.pdf" target="_blank" rel="noopener noreferrer">
            resume
          </a>
          <a href="https://github.com/roychon">source</a>
          <ThemeToggle />
        </nav>
      </div>

      <header className={styles.hero}>
        <div>
          <p className={styles.roleLine}>
            <span>CS @ Waterloo</span>
            <span>Canada</span>
          </p>
          <h1 className={styles.name} aria-label="Roy Chon">
            <BubbleName text="Roy Chon" />
          </h1>
        </div>
        <div className={styles.intro}>
          <p>
            Computer science at the <a href="https://uwaterloo.ca/">University of Waterloo</a>, with interests in distributed systems and AI tooling. Seeking 2027 SWE
            internships.
          </p>
          <div className={styles.chips}>
            <a className={`${styles.chip} ${styles.chipOn}`} href="mailto:rchon@uwaterloo.ca">
              Email ↗
            </a>
            <a className={styles.chip} href="https://github.com/roychon">
              GitHub ↗
            </a>
            <a className={styles.chip} href="https://www.linkedin.com/in/roychon/">
              LinkedIn ↗
            </a>
          </div>
        </div>
      </header>

      <main>
        <section aria-labelledby="experience-heading">
          <h2 id="experience-heading" className={styles.sectionTitle}>
            Experience <small>{workEntries.length} roles</small>
          </h2>
          <ul className={styles.grid}>
            {workEntries.map((job) => (
              <li key={`${job.org}-${job.period}`} className={styles.card}>
                <div className={styles.cardHead}>
                  {/* eslint-disable-next-line @next/next/no-img-element -- local logo marks */}
                  <img className={styles.logo} src={job.logoSrc} alt="" width={46} height={46} loading="lazy" decoding="async" />
                  <span className={styles.period}>{job.period}</span>
                </div>
                <div>
                  <p className={styles.org}>{job.orgUrl ? <a href={job.orgUrl}>{job.org}</a> : job.org}</p>
                  <p className={styles.role}>{job.title}</p>
                </div>
                <p className={styles.detail}>{job.detail}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.projects} aria-labelledby="projects-heading">
          <h2 id="projects-heading" className={styles.sectionTitle}>
            Projects <small>{projectEntries.length} entries</small>
          </h2>
          <ul className={styles.grid}>
            {projectEntries.map((p) => (
              <li key={p.name} className={styles.card}>
                <span className={styles.projectName}>{p.name}</span>
                <span className={styles.stack}>{p.stack}</span>
                <p className={styles.detail}>{p.blurb}</p>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <Footer />
    </div>
  );
}
