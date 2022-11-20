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
import { GetServerSideProps, GetStaticProps } from 'next';
import { useTypingText } from '../hooks/useTypingText';

const AllComponents = ({ page, preview }:any) => {
	
	let content = page.pageBlocks;

	return (
		<>
		<Head>
			<title>PicNext Prototype</title>
			<link rel="icon" href="/favicon.ico" />
		</Head>
		<MainLayout>	
			<main className={'main'}>
				{preview ? `previewing ${page.title}` : ''}
				<h1>{page.title}</h1>
				<PageBlocks content={content} />
			</main>
		</MainLayout>
		</>
	)
}


export const getServerSideProps: GetServerSideProps = async (context) => {
    // console.log(context);
    
	// const slug = context?.query?.slug ? context.query.slug : 'test-article-three'
    
	const res = await fetch(`https://servd-test-staging.cl-eu-west-3.servd.dev/api/pages/all-components.json`);
    const data = await res.json();

	// console.log(data);
	// grab the preview from context

    const preview = context.preview;
    let prevData;

	// if is preview, call home to get the latest draft, by pinging the element-api and passing along the same token we did with thw original
	// request.

    if(preview){
        const previewData = context.previewData;
        const prevResponse = await fetch(`https://servd-test-staging.cl-eu-west-3.servd.dev/api/pages/all-components.json?token=${previewData['token']}`);
        prevData = await prevResponse.json()
	}
	
	// set the page data based on preview. If preview mode, get the draft stuff, and if not, get the last published entry in the db

    let page = preview ? prevData : data;

    return {
		props: {
			preview: preview ? true : false,
			page: page
		}
	};
};


export default AllComponents; 


