import styles from "./styles.module.css";

export default function ExperienceSection() {
  return (
    <>
      <div className={styles.experience}>
        <p>currently, I&apos;m:</p>
        <ul>
          <li>
            joining the Coins team at <a href="https://www.bitgo.com/">Bitgo</a> this winter, working on crypto as a service
          </li>
          <li>seeking 2026 software engineering internships</li>
        </ul>
      </div>
      <div className={styles.experience}>
        <p>previously, I&apos;ve:</p>
        <ul>
          <li>
            worked on growth at <a href="https://www.faire.com/">Faire</a>, an online wholesale marketplace unicorn
          </li>
          <li>
            built product features at <a href="https://www.vividseats.com/">Vivid Seats</a>, a leading online ticket marketplace
          </li>
          <li>
            developed generative AI apps for <a href="https://www.wsib.ca/en">WSIB</a>, a workplace compensation board
          </li>
          <li>
            wrapped up my 3A term at <a href="https://uwaterloo.ca/">Waterloo</a>
          </li>
        </ul>
      </div>
      <div className={styles.experience}>
        <p>in my spare time, I&apos;m:</p>
        <ul>
          <li>building machine learning models to beat online sportsbooks</li>
        </ul>
      </div>
      <div className={styles.experience}>
        <p className={styles.smallFont}>Last Updated: Sept 2025</p>
      </div>
    </>
  );
}
