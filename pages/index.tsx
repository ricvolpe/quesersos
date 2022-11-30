import Head from 'next/head'
import Link from 'next/link'
import { motion, AnimatePresence } from "framer-motion"
import styles from '../styles/Home.module.css'
import { useState } from 'react'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()
  const [isVisible, setVisible] = useState(true)
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setVisible(false);
    setTimeout(() => {
      router.push('/other');
    }, 1010);
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            animate={{ x: [-100, 0], y: [-100, 0], rotate: [-180, 0] }}
            exit={{ x: [0, -100], y: [0, -100], rotate: [0, -180] }}
            className={styles.circlesFirst}
            key="circlesFirst"
            transition={{ duration: 1 }}
          >
            <div className={styles.circle} style={{ top: 0, left: 15 }} />
            <div className={styles.circle} style={{ top: 10, left: 0 }} />
            <div className={styles.circle} style={{ top: 5, left: 10 }} />
            <div className={styles.circle} style={{ top: 10, left: 15 }} />
            <div className={styles.circle} style={{ top: -5, left: 0 }} />
            <div className={styles.circle} style={{ top: 0, left: -5 }} />
          </motion.div>
        )}
      </AnimatePresence>
      <div className={styles.menu}>
        <Link href="/other" onClick={handleClick}>Create a universe</Link>
      </div>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            animate={{ x: [100, 0], y: [100, 0], rotate: [180, 0] }}
            exit={{ x: [0, 100], y: [0, 100], rotate: [0, 180] }}
            className={styles.circlesSecond}
            key="circlesSecond"
            transition={{ duration: 1 }}
          >
            <div className={styles.circle} style={{ top: 0, left: 15 }} />
            <div className={styles.circle} style={{ top: 10, left: 0 }} />
            <div className={styles.circle} style={{ top: 5, left: 10 }} />
            <div className={styles.circle} style={{ top: 10, left: 15 }} />
            <div className={styles.circle} style={{ top: -5, left: 0 }} />
            <div className={styles.circle} style={{ top: 0, left: -5 }} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
