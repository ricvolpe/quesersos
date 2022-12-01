import Head from 'next/head'
import Image from 'next/image'
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
    }, 1000);
  }
  return (
    <div className={styles.page}>
      <Head>
        <title>What being are you?</title>
        <meta name="description" content="What being are you?" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <AnimatePresence>
          {isVisible && (
            <motion.div
              animate={{ x: -100, y: 75, rotate: 340 }}
              exit={{ x: -200, y: -100, rotate: -180 }}
              className={styles.circlesFirst}
              key="circlesFirst"
              transition={{ duration: 1 }}
            >
              <div className={[styles.circle, styles.titleFirst].join(" ")} style={{ top: 0, left: 15 }}>
                <div style={{ color: 'white', WebkitTextStroke: '2px #4D8C52' }} >QUE</div>
                <div style={{ color: 'white', WebkitTextStroke: '2px #F9DC5C' }}>SER</div>
                <div style={{ color: 'white', WebkitTextStroke: '2px #F55D3E' }}>SOS</div>
              </div>
              <div className={styles.circle} style={{ top: 10, left: 0 }} />
              <div className={styles.circle} style={{ top: 5, left: 10 }} />
              <div className={styles.circle} style={{ top: 10, left: 15 }} />
              <div className={styles.circle} style={{ top: -5, left: 0 }} />
              <div className={styles.circle} style={{ top: 0, left: -5 }} />
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {isVisible && (
            <motion.div
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={styles.menu}
              transition={{ duration: 1 }}
            >
              <Link href="/other" onClick={handleClick}>
                <div className={styles.menuItem}>
                  <Image src="/imgs/hand.png" alt="Two chillies" width={40} height={40} />
                  <div className={styles.menuItemMultiLine}>
                    <div>CREATE</div>
                    <div style={{ fontSize: '12px' }}>A UNIVERSE</div>
                  </div>
                </div>
              </Link>
              <Link href="/other" onClick={handleClick}>
                <div className={styles.menuItem}>
                  <Image src="/imgs/hand.png" alt="Two chillies" width={40} height={40} />
                  <div className={styles.menuItemMultiLine}>
                    <div>JOIN</div>
                    <div style={{ fontSize: '12px' }}>A UNIVERSE</div>
                  </div>
                </div>
              </Link>
              <Link href="/other" onClick={handleClick}>
                <div className={styles.menuItem}>
                  <Image src="/imgs/hand.png" alt="Two chillies" width={40} height={40} />
                  <div className={styles.menuItemMultiLine}>
                    <div>GUIDE</div>
                  </div>
                </div>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {isVisible && (
            <motion.div
              animate={{ x: 100, y: -75, rotate: 375 }}
              exit={{ x: 200, y: 100, rotate: -180 }}
              className={styles.circlesSecond}
              key="circlesSecond"
              transition={{ duration: 1 }}
            >
              <div className={[styles.circle, styles.titleSecond].join(" ")} style={{ top: 0, left: 15 }}>
                <div>
                  <div style={{ color: 'white', WebkitTextStroke: '2px #4D8C52' }}>WHAT</div>
                  <div style={{ color: 'white', WebkitTextStroke: '2px #F9DC5C' }}>BEING</div>
                  <div style={{ color: 'white', WebkitTextStroke: '2px #F55D3E' }}>ARE</div>
                  <div style={{ color: 'white', WebkitTextStroke: '2px black' }}>YOU?</div>
                </div>
              </div>
              <div className={styles.circle} style={{ top: 10, left: 0 }} />
              <div className={styles.circle} style={{ top: 5, left: 10 }} />
              <div className={styles.circle} style={{ top: 10, left: 15 }} />
              <div className={styles.circle} style={{ top: -5, left: 0 }} />
              <div className={styles.circle} style={{ top: 0, left: -5 }} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
