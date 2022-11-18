import { useState, useEffect } from 'react'
import Head from 'next/head'
import MainLayout from '../components/Globals/Layouts/MainLayout'
import Faq from '../components/Faq/Faq'
import Hero from '../components/Hero'
import BoxedImage from '../components/BoxedImage'
import Button from '../components/Button'
import Cards from '../components/Cards/Cards'
// import Contact from '../components/Contact/Contact'
import CTA from '../components/CTA/CTA'
import Chapters from '../components/Chapters/Chapters'
import MapComponent from '../components/Map/MapComponent'
import MiniBanner from '../components/MiniBanner'
import Note from '../components/Note'
import Test from '../components/Test'
import TextVisual from '../components/TextVisual'
import USPs from '../components/USPs'
import Video from '../components/Video'
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
		<>
		<Head>
			<title>Create Next App</title>
			<link rel="icon" href="/favicon.ico" />
		</Head>
		<MainLayout>

		
		<main className={'main'}>
			<Hero />
			<h1 className={'title'}>
			{word ? word : `Welcome to ${data['name']}!`}
			</h1>
			{/* <Test /> */}
			<Faq />
			<div className={'description'}>
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
				<br />*/}
				<BoxedImage />
				<br />
				{/* <Button text="Breaking Stuff Rocks" />  */}
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
				<Note />
				<br />
				<TextVisual />
				<br />
				<USPs />
				<br/>
				<Video />
				<br />
				<Test color="primary"/>
			</div>
		</main>
		</MainLayout>
		</>
	)
}

