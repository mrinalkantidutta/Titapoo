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
        <button onclick="downloadPDFMKDCV()">Mrinal's CV</button>
        function downloadPDFMKDCV() {
  const pdfUrl = '/MKD_CV.pdf';
  const a = document.createElement('a');
  a.href = pdfUrl;
  a.download = 'MKD_CV.pdf';
  a.click();
}
        <p className="description">
          I will come back with more editing with help of Supriyo and Rangan.
        </p>
      </main>

      <Footer />
    </div>
  )
}
