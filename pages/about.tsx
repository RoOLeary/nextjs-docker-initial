import MainLayout from '../components/Globals/Layouts/MainLayout'
import { GetStaticProps } from 'next';

const About = ({entry, preview}) => {

    console.log(entry)
    // console.log(preview);

    return(
        <MainLayout>
            <section className="b-text c-section" id="about">
                <div className="o-wrapper">
                    <div className="o-grid o-grid--gap-xxl">
                        <h1>{entry.title}</h1>
                        <p>Just a scratch about page, nothing to see here yet</p>
                    </div>
                </div>
            </section>

        </MainLayout>

    )

}

// export async function getStaticProps({ params, preview }) {
    
    
//     const res = await fetch(`https://servd-test-staging.cl-eu-west-3.servd.dev/api/pages/about.json`);
//     const entry = await res.json();  
  

    

//     return {
//         props: {
//             entry: entry
//         }
//     }
// }

export const getStaticProps: GetStaticProps = async (context) => {

    //make an api call to a particular entry with required headers
    // console.log(process.env.PREVIEW_TOKEN);

    const res = await fetch('https://servd-test-staging.cl-eu-west-3.servd.dev/api/pages/about.json', {
      headers: {
        token: process.env.PREVIEW_TOKEN
      }
    })
    const data = await res.json()
    
    // console.log(context.preview);

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


