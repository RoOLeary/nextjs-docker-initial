import { useState, useEffect } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import MainLayout from '../components/Globals/Layouts/MainLayout'
import Faq from '../components/Faq/Faq'
import Hero from '../components/Hero/Hero'
import Button from '../components/Button/Button'
import Cards from '../components/Cards/Cards'
// import Contact from '../components/Contact/Contact'
import CTA from '../components/CTA/CTA'
import Chapters from '../components/Chapters/Chapters'
import MapComponent from '../components/Map/MapComponent'
import MiniBanner from '../components/MiniBanner/MiniBanner'
import USPs from '../components/USPs/USPs'
import { useTypingText } from '../hooks/useTypingText';

export default function Home({ allo }) {
	const [data, setData] = useState('')
	const { word } = useTypingText(['Testing', 'To See', 'If This', 'works'], 250, 20);
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
		<MainLayout>
		<main className={styles.main}>
			<h1 className={styles.title}>
			{word ? word : `Welcome to ${data['name']}!`}
			</h1>
			{/* <Test /> */}
			<Faq />
			<div className={styles.description}>
			Here goes: 
			<ul>
				{data['results'] ? data['results'].map((r, i) => {
					return (
					<li key={i}>
						<span>{r.name}</span>
						{/* <img src={r.image} /> */}
					</li>
					);
				}): <li>Nada yet</li>}

			</ul>
			{/* <Hero />
			<br />
			<Button text="Breaking Stuff Rocks" /> */}
			<br />
			<Cards />
			<br />
			{/* <Contact />
			<br /> */}
			<CTA />
			<br />
			<Chapters />
			<br />
			<MapComponent />
			<br />
			<MiniBanner />
			<br />
			<USPs />
		</div>

		
		</main>
		</MainLayout>
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

