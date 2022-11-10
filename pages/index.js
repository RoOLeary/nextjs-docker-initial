import { useState, useEffect } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home({ allo }) {
  const [data, setData] = useState('')
  useEffect(() => {
    // setLoading(true)
    fetch('/api/hello')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        console.log(data);
      })
  }, [])
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js</a> on Docker{data['name'] ? `, ${data['name']}!` : `!`}
        </h1>

        <p className={styles.description}>
          Here goes: 
          <ul>
            {data['results'] ? data['results'].map((r, i) => {
                return (
                  <li key={i}>
                    <p>{r.name}</p>
                    <img src={r.image} />
                  </li>
                );
            }): <li>Nada yet</li>}

          </ul>
         
        </p>

      
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}

