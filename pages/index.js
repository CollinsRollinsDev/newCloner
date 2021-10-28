import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import HomePage from '../components/Header/HomePage/HomePage'
import { WalletProvider } from '../contexts/WalletProvider'

export default function Home() {
  return (
      <div className={styles.container}>
      <Head>
        <title>Just a preview</title>
        <meta name="description" content="Dummy for now" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <HomePage />
    </div>
    
  )
}
