import Head from 'next/head'
import MainLayout from '../components/Globals/Layouts/MainLayout'
import PageBlocks from '../components/PageBlocks'
import { GetServerSideProps } from 'next'

const About = ({ page, preview }:any) => {

  const { title } = page;
  const content = page.pageBlocks;
	return(
		<>
			<Head>
				<title>About us | PicNext Prototype</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<MainLayout>
			{preview ? <h3>Preview Mode</h3> : null}
			<PageBlocks content={content} />
			</MainLayout>
		</>
	)
}


export const getServerSideProps: GetServerSideProps = async (context) => {
  // console.log(context);
  const res = await fetch(`https://servd-test-staging.cl-eu-west-3.servd.dev/api/pages/about.json`);
  const data = await res.json();

  const preview = context.preview;
  let prevData;

  if(preview){
    const previewData = context.previewData;
    // console.log(previewData['token']);
    const prevResponse = await fetch(`https://servd-test-staging.cl-eu-west-3.servd.dev/api/pages/about.json?token=${previewData['token']}`);
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





export default About; 

