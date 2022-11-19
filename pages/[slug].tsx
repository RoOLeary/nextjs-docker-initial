import { useRouter } from 'next/router'
import Link from 'next/link'
import MainLayout from './../components/Globals/Layouts/MainLayout'
import { GetServerSideProps } from 'next'

const Page = ({ page }:any) => {

   
    const router = useRouter()
    const slug = router.query
    const {title, body} = page;
    console.log(title);
    return (
        <MainLayout>
           
            <section className="b-text  c-section" id="learn-more">
                <div className="o-wrapper">
                    
                    <div>
                        <h1>{title}</h1>
                        <div className={"c-formatted"} dangerouslySetInnerHTML={{__html: body }} />  
                    </div>
                </div>
               
            </section>
            
            {/* <PageBlocks content={pageBlocks} /> */}

            {/* <Related related={entry.manualRelatedArticles} currentslug={entry.slug} /> */}
        
        </MainLayout>
    )
  }
  
// // This also gets called at build time

export const getServerSideProps: GetServerSideProps = async (context) => {
    
    const slug = context.query.slug ? context.query.slug : 'test-article-three'
    const res = await fetch(`https://servd-test-staging.cl-eu-west-3.servd.dev/api/articles/${slug}.json`);
    let data = await res.json();

    const preview = context.preview;
    let prevData;

    if(preview){
        console.log('preview is true');
        const previewData = context.previewData;
        const prevResponse = await fetch(`https://servd-test-staging.cl-eu-west-3.servd.dev/api/articles/${slug}.json?token=${previewData}`);
        prevData = await prevResponse.json()
        
    } 
    let page = preview ? prevData : data;

    return {
        props: { 
            page: page
        }
    };
}

export default Page; 