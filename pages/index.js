import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import HomePage from '../components/Header/HomePage/HomePage'
import { WalletProvider } from '../contexts/WalletProvider'

export default function Home() {
  return (
      <div className={styles.container}>
      <Head>
        <title>HomePage</title>
        <meta name="description" content="OpenSea Support Nft" />
        <link rel="icon" href="/logoColored.png" />
      </Head>
        <HomePage />
    </div>
    
  )
}
