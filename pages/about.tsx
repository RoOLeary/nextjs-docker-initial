import MainLayout from '../components/Globals/Layouts/MainLayout'
import PageBlocks from '../components/PageBlocks'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'

const About = ({ page, preview }:any) => {

  const {locale } = useRouter();
  console.log(locale);
  const { title } = page;
  const content = page.pageBlocks;
  return(
    <MainLayout>
      {preview ? <h1>In Preview Mode</h1> : null}
      <p>About {locale ? `locale: ${locale}` : ''}</p>
      <PageBlocks content={content} />
    </MainLayout>
  )
}


export const getStaticProps: GetStaticProps = async ({ locale,  preview = false, previewData }) => {
  
  // console.log(params)
  let loc = locale;
	let url; 
	if(loc == 'nl'){
		url = `https://servd-test-staging.cl-eu-west-3.servd.dev/api/${loc}/pages/over-picnic.json`;
	} else {
		url = `https://servd-test-staging.cl-eu-west-3.servd.dev/api/pages/about.json`;
	}

  const res = await fetch(url);
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

