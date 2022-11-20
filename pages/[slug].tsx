import Head from 'next/head'
import { useRouter } from 'next/router'
import MainLayout from './../components/Globals/Layouts/MainLayout'
import StaticHeader from './../components/StaticHeader'
import PageBlocks from './../components/PageBlocks'
import { GetServerSideProps } from 'next'

const Page = ({ page, preview }:any) => {

   
    const router = useRouter()
    const slug = router.query
    const {title, body} = page;

    let content = page.blocks;
    console.log(page);
    return (
        <>
        <Head>
			<title>{page.title} | PicNext Prototype</title>
			<link rel="icon" href="/favicon.ico" />
		</Head>
        <MainLayout>
           {preview ? <h1>In Preview Mode</h1> : null}
            <StaticHeader content={title} />
            <PageBlocks content={content} />

            {/* <Related related={entry.manualRelatedArticles} currentslug={entry.slug} /> */}
        
        </MainLayout>
        </>
    )
  }
  
// // This also gets called at build time

export const getServerSideProps: GetServerSideProps = async (context) => {
    
    const slug = context.query.slug ? context.query.slug : 'test-article-three'
    let sectionHandle = 'articles';
    const res = await fetch(`https://servd-test-staging.cl-eu-west-3.servd.dev/api/${sectionHandle}/${slug}.json`);
    const data = await res.json();

    const preview = context.preview;
    let prevData;

    if(preview){
        console.log('preview is true');
        const previewData = context.previewData;
        const prevResponse = await fetch(`https://servd-test-staging.cl-eu-west-3.servd.dev/api/${sectionHandle}/${slug}.json?token=${previewData['token']}`);
        prevData = await prevResponse.json()
        
    } 
    let page = preview ? prevData : data;

    return {
        props: { 
            preview: preview ? true : false,
            page: page
        }
    };
}

export default Page; 