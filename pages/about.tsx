import MainLayout from '../components/Globals/Layouts/MainLayout'
import PageBlocks from '../components/PageBlocks'
import { GetStaticProps } from 'next';

const About = ({ page, preview }:any) => {

    const { title } = page;
    const content = page.pageBlocks;
    return(
        <MainLayout>
            {preview ? <h1>In Preview Mode</h1> : null}
            <section className="b-text c-section" id="about">
                <div className="o-wrapper">
                    <div>
                      <h1>{title}</h1>
                      Some random stuff
                    </div>
                </div>
                <PageBlocks content={content} />
            </section>

        </MainLayout>

    )

}


export const getStaticProps: GetStaticProps = async (context) => {
    // console.log(context);
    const res = await fetch(`https://servd-test-staging.cl-eu-west-3.servd.dev/api/articles/about.json`);
    const data = await res.json();

    const preview = context.preview;
    let prevData;

    if(preview){
        // console.log('preview is true');
        const previewData = context.previewData;
        console.log(previewData['token']);
        const prevResponse = await fetch(`https://servd-test-staging.cl-eu-west-3.servd.dev/api/pages/about.json?token=${previewData['token']}`);
        prevData = await prevResponse.json()
        // console.log(prevData);
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


