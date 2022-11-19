import MainLayout from '../components/Globals/Layouts/MainLayout'
import { GetServerSideProps } from 'next';

const About = ({ page, preview }) => {

    const { title } = page;

    return(
        <MainLayout>
            {preview ? <h1>In Preview Mode</h1> : null}
            <section className="b-text c-section" id="about">
                <div className="o-wrapper">
                    <div>
                      <h1>{page.title}</h1>
                      Some random stuff
                    </div>
                </div>
            </section>

        </MainLayout>

    )

}


export const getServerSideProps: GetServerSideProps = async (context) => {
    console.log(context);
    const slug = context?.query?.slug ? context.query.slug : 'about'
    const res = await fetch(`https://servd-test-staging.cl-eu-west-3.servd.dev/api/articles/${slug}.json`);
    const data = await res.json();

    const preview = context.preview;
    let prevData;

    if(preview){
        // console.log('preview is true');
        const previewData = context.previewData;
        const prevResponse = await fetch(`https://servd-test-staging.cl-eu-west-3.servd.dev/api/pages/${slug}.json?token=${previewData['token']}`);
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


