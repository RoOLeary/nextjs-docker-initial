import { useState, useEffect } from 'react'
import Head from 'next/head'
import MainLayout from '../components/Globals/Layouts/MainLayout'
// import Faq from '../components/Faq/Faq'
// import Hero from '../components/Hero'
import BoxedImage from '../components/BoxedImage'
// import Button from '../components/Button'
// import Cards from '../components/Cards/Cards'
// // import Contact from '../components/Contact/Contact'
// import CTA from '../components/CTA/CTA'
// import Chapters from '../components/Chapters/Chapters'
// import MapComponent from '../components/Map/MapComponent'
// import MiniBanner from '../components/MiniBanner'
// import Note from '../components/Note'
import Test from '../components/Test'
// import TextVisual from '../components/TextVisual'
// import USPs from '../components/USPs'
// import Video from '../components/Video'
import { useTypingText } from '../hooks/useTypingText';
import PageBlocks from '../components/PageBlocks'
import { GetStaticProps } from 'next';

const Home = () => {
	
	const { word } = useTypingText(['Testing', 'To See', 'If This', 'works'], 250, 20);
	
	// console.log(page.data[0].blocks);

	return (
		<>
		<Head>
			<title>Create Next App</title>
			<link rel="icon" href="/favicon.ico" />
		</Head>
		<MainLayout>

		
		<main className={'main'}>
			{/* <PageBlocks content={page.data[0].blocks} /> */}
			<BoxedImage />
			<br />
			<Test color="primary"/>
		</main>
		</MainLayout>
		</>
	)
}


export default Home; 


