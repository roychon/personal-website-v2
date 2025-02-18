import styles from "./styles.module.css";

export default function ExperienceSection() {
  return (
    <>
      <div className={styles.experience}>
        <p>currently, I&apos;m:</p>
        <ul>
          <li>
            joining <a href="https://www.faire.com/en-ca/">Faire</a> this summer, where I&apos;ll be building marketplace features
          </li>
          <li>seeking 2025 software engineering internships</li>
        </ul>
      </div>
      <div className={styles.experience}>
        <p>previously, I&apos;ve:</p>
        <ul>
          <li>
            built product features at <a href="https://www.vividseats.com/">Vivid Seats</a>, a leading online ticket marketplace
          </li>
          <li>
            developed generative AI apps for <a href="https://www.wsib.ca/en">WSIB</a>, a workplace compensation board
          </li>
          <li>
            wrapped up my 2B term at <a href="https://uwaterloo.ca/">Waterloo</a>
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
        <p className={styles.smallFont}>Last Updated: Feb 2025</p>
      </div>
    </>
  );
}
