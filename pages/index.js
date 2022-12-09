import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Hi, This is Mrinal, Welcome to my first project!" />
        <p className="description">
          I will come back with more editing.
        </p>
      </main>

      <Footer />
    </div>
  )
}
