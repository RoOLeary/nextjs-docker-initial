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

const Home = ({ page, preview, allo }) => {
	
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
			<PageBlocks content={page.data[0].blocks} />
			<BoxedImage />
			<br />
			<Test color="primary"/>
		</main>
		</MainLayout>
		</>
	)
}

export const getStaticProps: GetStaticProps = async (context) => {
	// console.log(context);
	const res = await fetch(`https://servd-test-staging.cl-eu-west-3.servd.dev/api/homepage.json`);
	const data = await res.json();

	const preview = context.preview;
	let prevData;

	if(preview){
		const previewData = context.previewData;
		console.log(previewData['token']);
		const prevResponse = await fetch(`https://servd-test-staging.cl-eu-west-3.servd.dev/api/homepage.json?token=${previewData['token']}`);
		prevData = await prevResponse.json()
	} 
	let page = preview ? prevData : data;

	if (!data) {
		return {
			notFound: true,
		}
	}
	return {
	props: {
		preview: preview ? true : false,
		page: page
	}
	};
};





export default Home; 


