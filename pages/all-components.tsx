import { useRouter } from 'next/router'
import MainLayout from './../components/Globals/Layouts/MainLayout'
import PageBlocks from './../components/PageBlocks'
import { GetServerSideProps } from 'next'

const AllComponents = ({ page, preview }:any) => {

    const router = useRouter()
    const slug = router.query
    const {title, body} = page;

    let content = page.blocks;
    console.log(content);
    return (
        <MainLayout>
           {preview ? <h1>In Preview Mode</h1> : null}
            <section className="b-text  c-section" id="learn-more">
                <div className="o-wrapper">
                    
                    <div>
                        <h1>{title}</h1>
                        <div className={"c-formatted"} dangerouslySetInnerHTML={{__html: body }} />  
                    </div>
                </div>
               
            </section>
            
            <PageBlocks content={content} />

            {/* <Related related={entry.manualRelatedArticles} currentslug={entry.slug} /> */}
        
        </MainLayout>
    )
  }
  
// // This also gets called at build time

export const getServerSideProps: GetServerSideProps = async (context) => {
    
    
    const res = await fetch(`https://servd-test-staging.cl-eu-west-3.servd.dev/api/pages/all-components.json`);
    const data = await res.json();

    const preview = context.preview;
    let prevData;

    if(preview){
        console.log('preview is true');
        const previewData = context.previewData;
        const prevResponse = await fetch(`https://servd-test-staging.cl-eu-west-3.servd.dev/api/pages/all-components?token=${previewData['token']}`);
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

export default AllComponents; 