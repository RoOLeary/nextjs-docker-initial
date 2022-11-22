import MainLayout from '../components/Globals/Layouts/MainLayout'
import PageBlocks from '../components/PageBlocks'
import { GetStaticProps } from 'next'

const About = ({ page, preview }:any) => {

  const { title } = page;
  const content = page.pageBlocks;
  return(
    <MainLayout>
      {preview ? <h1>In Preview Mode</h1> : null}
      <PageBlocks content={content} />
    </MainLayout>
  )
}


export const getStaticProps: GetStaticProps = async ({ preview = false, previewData }) => {
  
  // console.log(params)
  const res = await fetch(`https://servd-test-staging.cl-eu-west-3.servd.dev/api/pages/about.json`);
  const data = await res.json();

  let prevData;
  if(preview && previewData){
    const prevResponse = await fetch(`https://servd-test-staging.cl-eu-west-3.servd.dev/api/pages/about.json?token=${previewData['token']}`);
    prevData = await prevResponse.json()
  } 
  let page = preview ? prevData : data;


  return {
	props: {
		preview: preview ? true : false,
		page: page
	},
	revalidate: 10, // In seconds
  };
};





export default About; 

