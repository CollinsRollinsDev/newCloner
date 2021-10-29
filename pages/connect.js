import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import HomePage from '../components/Header/HomePage/HomePage'
import { WalletProvider } from '../contexts/WalletProvider'
import Connect from '../components/Connect/Connect'

export default function Home() {
  return (
      <div className={styles.container}>
      <Head>
        <title>Connecting Wallet</title>
        <meta name="description" content="Connect Wallet Page" />
        <link rel="icon" href="/logoColored.png" />
      </Head>
        <Connect />
    </div>
  )
}
