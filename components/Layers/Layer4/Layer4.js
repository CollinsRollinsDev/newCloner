import styles from './Layer4.module.css';
import Image from "next/image";


const Layer4 = () => {
    return (
        <section className={styles.container}>
            <p className={styles.head}>Browse by category</p>
            <section className={styles.cardsHolder}>
                <div className={styles.card}>
                    <div className={styles.up}>
                      <Image src="https://opensea.io/static/images/categories/art.png" alt="" layout="fill" />

                    </div>
                    <div className={styles.down}>
                       Art
                    </div>
                </div>

                <div className={styles.card}>
             <div className={styles.up}>
                      <Image src="https://opensea.io/static/images/categories/music.png" alt="" layout="fill" />

                    </div>
                    <div className={styles.down}>
                       Music
                    </div>
                </div>

                <div className={styles.card}>
                <div className={styles.up}>
                      <Image src="https://opensea.io/static/images/categories/domain-names.png" alt="" layout="fill" />

                    </div>
                    <div className={styles.down}>
                       Domain Names
                    </div>
                </div>

                <div className={styles.card}>
                <div className={styles.up}>
                      <Image src="https://opensea.io/static/images/categories/domain-names.png" alt="" layout="fill" />

                    </div>
                    <div className={styles.down}>
                       Virtual World
                    </div>
                </div>

                <div className={styles.card}>
                <div className={styles.up}>
                      <Image src="https://opensea.io/static/images/categories/trading-cards.png" alt="" layout="fill" />

                    </div>
                    <div className={styles.down}>
                       Trending Cards
                    </div>
                    </div>

                    <div className={styles.card}>
                    <div className={styles.up}>
                      <Image src="https://opensea.io/static/images/categories/collectibles.png" alt="" layout="fill" />

                    </div>
                        <div className={styles.down}>
                        Collectibles
                        </div>
                    </div>

                    <div className={styles.card}>
                    <div className={styles.up}>
                      <Image src="https://opensea.io/static/images/categories/utility.png" alt="" layout="fill" />

                    </div>
                        <div className={styles.down}>
                        Utility
                        </div>
                    </div>

                    <div className={styles.card}>
                    <div className={styles.up}>
                      <Image src="https://opensea.io/static/images/categories/all-nfts.pngg" alt="" layout="fill" />

                    </div>
                        <div className={styles.down}>
                        All NFTs
                        </div>
                    </div>
            </section>


        </section>
    )
}

export default Layer4
