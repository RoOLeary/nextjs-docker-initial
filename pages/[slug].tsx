import { useRouter } from 'next/router'
import Link from 'next/link'
import MainLayout from './../components/Globals/Layouts/MainLayout'
import { GetServerSideProps } from 'next'

const Page = ({ entry, preview, previewData }:any) => {

    const router = useRouter()
    const slug = router.query
    const {title, body} = entry;
    
    return (
        <MainLayout>
           
            <section className="b-text  c-section" id="learn-more">
                <div className="o-wrapper">
                    {/* <div className="o-grid o-grid--gap-xxl">
                        <div className="o-grid__col l:o-grid__col--span-4">
                            <h2 className="b-text__heading">General Page on  <code> {slug.slug} </code></h2>
                        </div>
                        <div className="o-grid__col l:o-grid__col--span-8">
                            <div className={"c-formatted"} dangerouslySetInnerHTML={{__html: body }} />     
                               
                               
                        </div>
                    </div> */}

                    <div>
                        <h1>{entry.title}</h1>
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
    // console.log(context.query.slug);
    const slug = context.query.slug ? context.query.slug : 'test-article-three'
    const res = await fetch(`https://servd-test-staging.cl-eu-west-3.servd.dev/api/articles/${slug}.json`);
    let data = await res.json();

    const preview = context.preview;
    const previewData = context.preview;

    console.log(preview, 'should be here');

    return {
        props: { 
            entry: data
        }
    };
}

export default Page; 