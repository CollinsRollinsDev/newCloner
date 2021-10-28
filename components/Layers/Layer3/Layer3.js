import styles from './Layer3.module.css';
import Image from "next/image";


const Layer3 = () => {
    return (
        <section className={styles.container}>
            <p className={styles.head}>Resources for getting started</p>
            <section className={styles.cardsHolder}>
                <div className={styles.card1}>
                    <div className={styles.up}>
                      <Image src="/img1.jpg" alt="" layout="fill" />

                    </div>
                    <div className={styles.down}>
                        10 tips for avoiding scams and staying safe on the decentralized...
                    </div>
                </div>
                <div className={styles.card2}></div>
                <div className={styles.card3}></div>
                <div className={styles.card4}></div>
            </section>


        </section>
    )
}

export default Layer3
