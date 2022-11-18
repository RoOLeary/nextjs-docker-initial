import MainLayout from '../components/Globals/Layouts/MainLayout'
import { GetStaticProps } from 'next';

const About = ({entry}) => {

    const { title } = entry;

    return(
        <MainLayout>

            <section className="b-text c-section" id="about">
                <div className="o-wrapper">
                    <div>
                      <h1>{entry.title}</h1>
                      Some random stuff
                    </div>
                </div>
            </section>

        </MainLayout>

    )

}


export const getStaticProps: GetStaticProps = async (context) => {

    //make an api call to a particular entry with required headers
    // console.log(process.env.PREVIEW_TOKEN);

    const res = await fetch('https://servd-test-staging.cl-eu-west-3.servd.dev/api/pages/about.json', {
      headers: {
        token: process.env.PREVIEW_TOKEN
      }
    })
    const data = await res.json()
    
    console.log(context);

    if (!data) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        entry: {...data} ,
      }
    };
  };





export default About; 


