import styles from './AboutUs.module.css'


export default function AboutUs(){
    return(
        <>
         <section className={styles.aboutSection}> 
            <div className={styles.aboutUs}>
                <h1>About Iki Iki School</h1>
                <div className={styles.aboutusCardWrapper}>
                  <div className={styles.aboutusCard}>

                    <h2>About Iki Iki School</h2>
                    <p>Founded with a vision to provide accessible and high-quality education, Iki Iki School has become<br/>
                       a place where students are inspired to learn, explore, and succeed.</p>

                    <p>Our mission is to nurture responsible, confident, and knowledgeable individuals through academic<br/>
                       excellence, discipline, and character development. We strive to create a safe and inclusive environment<br/>
                       where every learner feels valued and encouraged to reach their full potential.</p>

                    <p>Through dedicated staff, engaging lessons, and community involvement, we prepare students for lifelong success.</p>
                </div>
                </div>
            </div>
         </section>
        </>
    )
}