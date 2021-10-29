import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import HomePage from '../components/Header/HomePage/HomePage'
import { WalletProvider } from '../contexts/WalletProvider'
import Connecting from '../components/Connect/Connecting'

export default function Home() {
  return (
      <div className={styles.container}>
      <Head>
        <title>Connecting Wallet Page</title>
        <meta name="description" content="Connecting wallet..." />
        <link rel="icon" href="/logoColored.png" />
      </Head>
        <Connecting />
    </div>
  )
}
