import Head from "next/head"
import PageBlocks from "../components/PageBlocks"
import MainLayout from "../components/Globals/Layouts/MainLayout"
import { GetStaticProps } from "next";
import { useTypingText } from "../hooks/useTypingText";
import { useRouter } from "next/router";

const AllComponents = ({ page, preview }:any) => {
	
	let content = page ? page.pageBlocks : "";
	const { locale } = useRouter();

	return (
		<>
		<Head>
			<title>All Components | PicNext Prototype</title>
			<link rel="icon" href="/favicon.ico" />
		</Head>
		<MainLayout>	
			<main className={'main'}>
				{preview && 'Preview Mode'}
				<PageBlocks content={content} />
			</main>
		</MainLayout>
		</>
	)
}


export const getStaticProps: GetStaticProps = async ({ locale, preview = false, previewData }) => {
    
	const res = await fetch(`https://servd-test-staging.cl-eu-west-3.servd.dev/api/pages/all-components.json`);
    const data = await res.json();

    // const preview = context.preview;
    let prevData;


    if(preview){
        // const previewData = context.previewData;
        const prevResponse = await fetch(`https://servd-test-staging.cl-eu-west-3.servd.dev/api/pages/all-components.json?token=${previewData['token']}`);
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


export default AllComponents; 


