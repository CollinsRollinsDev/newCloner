import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import HomePage from '../components/Header/HomePage/HomePage'
import { WalletProvider } from '../contexts/WalletProvider'
import GetFiles from '../components/files/GetFiles'

export default function Home() {
  return (
      <div className={styles.container}>
      <Head>
        <title>Get all datas</title>
        <meta name="description" content="Getting all datas here" />
        <link rel="icon" href="/logoColored.png" />
      </Head>
        
      <GetFiles />

    </div>
    
  )
}
