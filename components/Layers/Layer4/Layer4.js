import styles from './Layer4.module.css';
import Image from "next/image";


const Layer4 = () => {
    return (
        <section className={styles.container}>
            <p className={styles.head}>Browse by category</p>
            <section className={styles.cardsHolder}>
                <div className={styles.card}>
                    <div className={styles.up}>
                      <Image src="https://lh3.googleusercontent.com/KlaiyG6EFhnop5RQbrD3tlzWnjCLCugK0MkGPY6x8FLB54TRIBSSIG-MDbpPx2X2K1wZSHif4-bfg-7aJX1sdsjHlxvoyby41vdU8SU=h200" alt="" layout="fill" />

                    </div>
                    <div className={styles.down}>
                       Art
                    </div>
                </div>

                <div className={styles.card}>
             <div className={styles.up}>
                      <Image src="https://lh3.googleusercontent.com/vP-gYgpjwLzDLEEo5OeABvMlHgUmZjl0bGGEZ806aRjE9WFlBipZQAvevK0nC2i-AHS61CaQsRYYQW9qzFbcl0Uf9EQfSgNFVHEmhg=h200" alt="" layout="fill" />

                    </div>
                    <div className={styles.down}>
                       Music
                    </div>
                </div>

                <div className={styles.card}>
                <div className={styles.up}>
                      <Image src="https://lh3.googleusercontent.com/73_mWP4lPG5z3tISoAaBiG9z5TEEJP-ZtdGkjKTGb-a1xqvr2mxnuaj-4_yRBwTRRO8wVbVf0Pw_Zo9XlN_pVSgky7jLhJYze8IMPOk=h200" alt="" layout="fill" />

                    </div>
                    <div className={styles.down}>
                       Domain Names
                    </div>
                </div>

                <div className={styles.card}>
                <div className={styles.up}>
                      <Image src="https://lh3.googleusercontent.com/JPbsVSfVls7Jbmos9ueZLG5Bw72KetGedfO746oqt6XCyr7_9GvdaIoXSkUssobUU1JDJTpxQVn6LINqcnkiaO0=h200" alt="" layout="fill" />

                    </div>
                    <div className={styles.down}>
                       Virtual World
                    </div>
                </div>

                <div className={styles.card}>
                <div className={styles.up}>
                      <Image src="https://lh3.googleusercontent.com/2lQlm0aUucGz_VIiZ9Fb-uuqL0CDf5XvDbTmwlClQsiyrlV2BxJiNxs1IaSuiN7MGSvSKvqCBixTJtlJePOiXmwgbXRRwJZ_6cLxFw=h200" alt="" layout="fill" />

                    </div>
                    <div className={styles.down}>
                       Trending Cards
                    </div>
                    </div>

                    <div className={styles.card}>
                    <div className={styles.up}>
                      <Image src="https://lh3.googleusercontent.com/ttBvpvQyk8DUgjfPAIji9Y5EOuxH0gZXPoXAZL-wYNwxlepDnU3D9eebLuFbhoxY8soaYL4JziwWS9cnq77MwhtKt-O4NBM3PwOw=h200" alt="" layout="fill" />

                    </div>
                        <div className={styles.down}>
                        Collectibles
                        </div>
                    </div>

                    <div className={styles.card}>
                    <div className={styles.up}>
                      <Image src="https://lh3.googleusercontent.com/s5Wxf-YwIv1BhoHAKgNVwS1FXh5cnfiDdA3lqe89LcmvdbKOtlaWgKbavN5zWQiir3eWaKX8pBAmBrmF8JJwB8R9ZXpppHrO8lkf=h200" alt="" layout="fill" />

                    </div>
                        <div className={styles.down}>
                        Utility
                        </div>
                    </div>

                    <div className={styles.card}>
                    <div className={styles.up}>
                      <Image src="https://lh3.googleusercontent.com/Z83eH0SKXuR-szAsaFQvoz_mQUshxiEJjrl6nh71-3gOD4U-Z5Crpt2qcwGTf4vltfBWods9VVGDkv436z2_QmKK-Wi7aBrd640l=h200" alt="" layout="fill" />

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
