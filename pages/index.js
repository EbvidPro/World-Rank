import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Countries</title>
        <meta name='keywords' content='Ranks of Countries'></meta>
      </Head>
      <div className={styles.container}>
        <h1 className={styles.homeHeading}> Here are the Ranks of Countries</h1>
        <Link href={'/list'}><a className={styles.listBtn} title='Country list'>List</a></Link>
      </div>
    </>
  )
}
