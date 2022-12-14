import MainLayout from '../components/Globals/Layouts/MainLayout'
import PageBlocks from '../components/PageBlocks'
import { GetStaticProps, GetServerSideProps } from 'next'
import { useRouter } from 'next/router'

const About = ({ page, preview }:any) => {

  const router = useRouter();
  const content = page.pageBlocks;

  // if (!router.isFallback && !content) {
  //   return <h1>404</h1>
  // }

  return(
    <MainLayout>
      {preview ? <h1>In Preview Mode</h1> : null}
      {/* <p>About {router.locale ? `locale: ${router.locale}` : ''}</p> */}
      <PageBlocks content={content} />
    </MainLayout>
  )
}

// export const getServerSideProps: GetServerSideProps = async ({ locale, context }:any) => {
export const getStaticProps: GetStaticProps = async ({ locale, params, preview = false, previewData }) => {

  let url; 
  if(locale == 'nl'){
    url = `https://servd-test-staging.cl-eu-west-3.servd.dev/api/${locale}/pages/over-picnic.json`;
  } else {
    url = `https://servd-test-staging.cl-eu-west-3.servd.dev/api/${locale}/pages/about.json`; 
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
			page: data
		},
	  revalidate: 10, // In seconds
  };
};





export default About; 

