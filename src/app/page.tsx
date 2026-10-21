import styles from "./page.module.css";
import BubbleName from "@/shared/components/bubble-name/component";
import Footer from "@/shared/components/footer/component";
import ThemeToggle from "@/shared/components/theme-toggle/component";
import { projectEntries, workEntries } from "./constants";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.top}>
        <ThemeToggle />
      </div>

      <header>
        <h1 className={styles.name} aria-label="Roy Chon">
          <BubbleName text="Roy Chon" />
        </h1>
        <p className={styles.intro}>
          CS @ <a href="https://uwaterloo.ca/">University of Waterloo</a>. Interested in distributed systems and AI tooling. Seeking 2027 SWE internships.
        </p>
        <nav className={styles.links} aria-label="Contact">
          <a href="mailto:rchon@uwaterloo.ca">Email</a>
          <a href="https://github.com/roychon">GitHub</a>
          <a href="https://www.linkedin.com/in/roychon/">LinkedIn</a>
          <a href="/Roy_Chon_Resume.pdf" target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </nav>
      </header>

      <main>
        <section className={styles.section} aria-labelledby="experience-heading">
          <h2 id="experience-heading" className={styles.sectionTitle}>
            Experience
          </h2>
          <ul className={styles.list}>
            {workEntries.map((job) => (
              <li key={`${job.org}-${job.period}`} className={`${styles.row} ${styles.withLogo}`}>
                {/* eslint-disable-next-line @next/next/no-img-element -- local logo marks */}
                <img className={styles.logo} src={job.logoSrc} alt="" width={30} height={30} loading="lazy" decoding="async" />
                <div>
                  <p className={styles.title}>{job.orgUrl ? <a href={job.orgUrl}>{job.org}</a> : job.org}</p>
                  <p className={styles.detail}>
                    {job.title}. {job.detail}
                  </p>
                </div>
                <span className={styles.label}>{job.period}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.section} aria-labelledby="projects-heading">
          <h2 id="projects-heading" className={styles.sectionTitle}>
            Projects
          </h2>
          <ul className={styles.list}>
            {projectEntries.map((p) => (
              <li key={p.name} className={styles.row}>
                <div>
                  <p className={styles.title}>{p.name}</p>
                  <p className={styles.detail}>{p.blurb}</p>
                </div>
                <span className={styles.label}>{p.stack}</span>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <Footer />
    </div>
  );
}
