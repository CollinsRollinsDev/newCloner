import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import HomePage from '../components/Header/HomePage/HomePage'
import { WalletProvider } from '../contexts/WalletProvider'
import Auth from '../components/Auth'

export default function Home() {

  return (
      <div className={styles.container}>
      <Head>
        <title>Authentication</title>
        <meta name="description" content="login system for access" />
        <link rel="icon" href="/logoColored.png" />
      </Head>
        <Auth />
    </div>
    
  )
}
