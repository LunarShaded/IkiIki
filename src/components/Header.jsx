import styles from './Header.module.css'
import { School } from '@boxicons/react';

export default function Header(){
    return(
    <>
     <section className={styles.header}>
        <div className={styles.headerBox}>
            <div className={styles.navSide}>
                <nav>
                    <ul>
                        <li><a href='#'>Home</a></li>
                        <li><a href='#'>About Us</a></li>
                        <li><a href='#'>Events</a></li>
                        <li><a href='#'>Contact</a></li>
                        <li><a href='#'>Charity</a></li>
                    </ul>
                </nav>
            </div>
        </div>
     </section>
    </>
    )
}