import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Navbar from '@/components/navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div>
        <Head>
          <title>Mahadev Fashion</title>
          <meta name='description' content='Mahadev Fashion - wear the clothe' />
          <link rel='icon' href='/favicon.ico'></link>
        </Head>

        <Navbar />
        <div>
          <Image src='/home.jpeg' width={auto} height={auto} alt='' />
        </div>
        <Footer />
      </div>
    </>
  )
}
