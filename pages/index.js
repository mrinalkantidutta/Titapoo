import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

function downloadPDFMKDCV() {
  let pdfUrl = '/My CV_Canva.pdf';
  let a = document.createElement('a');
  a.href = pdfUrl;
  a.download = 'My CV_Canva.pdf';
  a.click();
}
export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
           
      <main>
              <Header title="Hi, This is Mrinal, Welcome to my first project!" />
        <button onClick={downloadPDFMKDCV}>Download My Resume</button>
        <p className="description">
          I will come back with more editing with help of Supriyo and Rangan.
        </p>
      </main>

      <Footer />
    </div>
  )
}