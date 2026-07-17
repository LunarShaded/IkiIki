import styles from './Hero.module.css'
import { Globe } from '@boxicons/react';

export default function Hero(){
    return(
        <>
          <section className={styles.heroSection}>
           <div className={styles.heroContent}>

            <div className={styles.title}>

             <h1>Welcome to Iki Iki School</h1>
             <p>Empowering young minds through quality education, strong values, and a supportive learning environment.<br/>
               At Iki Iki School, we believe every child has the potential to achieve greatness. Our dedicated teachers,<br/>
               modern learning methods, and vibrant community help students grow academically, socially, and personally.</p>

            </div>

            <div className={styles.heroNav}>
                <a href='#' className={styles.learnBtn}>Learn More</a>
                <a href='#' className={styles.supportBtn}>Support Charity</a>
            </div>

            </div>
          </section>
        </>
    )
}