import MainLayout from "../components/Globals/Layouts/MainLayout"
import PageBlocks from "../components/PageBlocks"
import { GetStaticProps } from "next"
import { useRouter } from 'next/router';

const About = ({ page, preview }:any) => {

  const { locale } = useRouter(); 
  const content = page.pageBlocks ? page.pageBlocks : null
  return(
    <MainLayout>
      {preview && <h1>In Preview Mode</h1>}
      {content ? <PageBlocks content={content} /> : <h1>Loading</h1>}
    </MainLayout>
  )
}


export const getStaticProps: GetStaticProps = async ({ locale, preview = false, previewData }) => {

  // console.log('about', locale);
  
  const res = await fetch(`https://servd-test-staging.cl-eu-west-3.servd.dev/api/pages/about.json`);
  const data = await res.json();

  // let prevData;
  // if(preview && previewData){
  //   const prevResponse = await fetch(`https://servd-test-staging.cl-eu-west-3.servd.dev/api/pages/about.json?token=${previewData['token']}`);
  //   prevData = await prevResponse.json()
  // } 
  let page = preview ? previewData : data;


  return {
    props: {
      preview: preview ? true : false,
      page: page
    },
	  revalidate: 10, // In seconds
  };
};





export default About; 

