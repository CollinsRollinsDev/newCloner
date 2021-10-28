import styles from './Layer1.module.css';
import Image from "next/image";

const Layer1 = () => {
    return (
        <section className={styles.container}>
            <p className={styles.head}>Trending in <span>all categories</span></p>

            <section className={styles.cardsHolder}>
                <div className={styles.card1}>
                    <div className={styles.up}>
                      <Image src="/img1.jpg" alt="" layout="fill" />

                    </div>
                    <div className={styles.down}>
                        <p className={styles.title}>Z-Huge</p>
                        <p className={styles.name}>by <span>MountVitruvius</span></p>
                        <p className={styles.desc}>
                            512 generative sketches exploring curl noise, colour and constraints.
                        </p>
                   
                    </div>
                </div>
            </section>
        
        </section>
    )
}

export default Layer1
