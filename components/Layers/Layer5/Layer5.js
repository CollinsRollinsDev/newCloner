import styles from './Layer5.module.css'


const Layer5 = () => {
    return (
        <section className={styles.container}>
            <p className={styles.head}>Meet OpenSea</p>
            <p className={styles.subHead}>The NFT marketplace with everything for everyone</p>
            
            <section className={styles.play}>
                <div className={styles.vidHolder}>
                    <video src="https://www.youtube.com/embed/gfGuPd1CELo?list=TLGG0LpIW2LMI8cyNTEwMjAyMQ" controls></video>
                </div>
                <div className={styles.end}>
                Fiat on-ramp and profile customization is coming soon.
                </div>
            </section>

            <button className={styles.btn}>
                Explore the marketplace
            </button>

        </section>
    )
}

export default Layer5
