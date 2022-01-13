import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import Join from '../components/join'
import { HMSRoomProvider } from '@100mslive/hms-video-react'
import Conference from '../components/conf'

const Home: NextPage = () => {
  const [renderUI, setRenderState] = useState(false)
  useEffect(() => {
    if (!renderUI && typeof window !== 'undefined') {
      setRenderState(true)
    }
  })
  return (
    <div className={styles.container}>
      <Head>
        <title>Video Conferencing App</title>
        <meta name="description" content="Video conferencing App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {
          renderUI &&
          <HMSRoomProvider>
            <h1 className="text-4xl text-center text-white">Free Video Meetings</h1>
            <Join state=""/>
            <Conference/>
          </HMSRoomProvider>
        }
      </main>
    </div>
  )
}

export default Home
