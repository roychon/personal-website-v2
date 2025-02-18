import styles from "./page.module.css";
import BubbleText from "@/shared/components/bubble-texts/component";
import { bubbleTextChars } from "./constants";
import ExperienceSection from "@/shared/components/experience-section/component";
import Header from "@/shared/components/header/component";
import Footer from "@/shared/components/footer/component";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.container}>
        <BubbleText chars={bubbleTextChars} />
        <p className={styles.subtitle}>
          I'm a computer science student at the <a href="https://uwaterloo.ca/">University of Waterloo</a> and a software engineer based in Canada.
        </p>
        <ExperienceSection />
      </div>
      <Footer />
    </div>
  );
}
