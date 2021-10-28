import styles from './Layer3.module.css';
import Image from "next/image";


const Layer3 = () => {
    return (
        <section className={styles.container}>
            <p className={styles.head}>Resources for getting started</p>
            <section className={styles.cardsHolder}>
                <div className={styles.card1}>
                    <div className={styles.up}>
                      <Image src="https://lh3.googleusercontent.com/vfYB4RarIqixy2-wyfP4lIdK6fsOT8uNrmKxvYCJdjdRwAMj2ZjC2zTSxL-YKky0s-4Pb6eML7ze3Ouj54HrpUlfSWx52xF_ZK2TYw=h200" alt="" layout="fill" />

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
