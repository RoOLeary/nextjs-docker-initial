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
import PageBlocks from '../components/PageBlocks'
import USPs from '../components/USPs'
import { GetStaticProps } from 'next';
import { useTypingText } from '../hooks/useTypingText';

const AllComponents = ({ page, preview }) => {
	// const [data, setData] = useState('')
	// const { word } = useTypingText(['Testing', 'To See', 'If This', 'works'], 250, 20);
	// useEffect(() => {
	// // setLoading(true)
	// 	fetch('/api/hello')
	// 		.then((res) => res.json())
	// 		.then((data) => {
	// 		setData(data)
	// 		console.log(data);
	// 		})
	// }, [])

	let content = page.pageBlocks;

	return (
		<>
		<Head>
			<title>Create Next App</title>
			<link rel="icon" href="/favicon.ico" />
		</Head>
		<MainLayout>

		
		<main className={'main'}>
			{preview ? `previewing ${page.title}` : ''}
			
			<PageBlocks content={content} />
			
		</main>
		</MainLayout>
		</>
	)
}


export const getStaticProps: GetStaticProps = async (context) => {
    // console.log(context);
    // const slug = context?.query?.slug ? context.query.slug : 'test-article-three'
    const res = await fetch(`https://servd-test-staging.cl-eu-west-3.servd.dev/api/articles/all-components.json`);
    const data = await res.json();

	console.log(data);
	
    const preview = context.preview;
    let prevData;

    if(preview){
        // console.log('preview is true');
        const previewData = context.previewData;
        const prevResponse = await fetch(`https://servd-test-staging.cl-eu-west-3.servd.dev/api/pages/all-components.json?token=${previewData['token']}`);
        prevData = await prevResponse.json()
        // console.log(prevData);
    } 
    let page = preview ? prevData : data;

    if (!page) {
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


export default AllComponents; 


