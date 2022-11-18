import MainLayout from '../components/Globals/Layouts/MainLayout'

const About = ({entry, preview}) => {
    
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

export async function getStaticProps({context, params, preview = false}) {
    
    const slug = context?.params?.slug || "about";
    const res = await fetch(`https://servd-test-staging.cl-eu-west-3.servd.dev/api/pages/${slug}.json`);
    
    // if(context.preview){
    //     console.log('in preview mode')
    // } else {
    //     console.log('flying blind')
    // }

    const entry = await res.json();  
    
    return {
        props: {
            entry: entry
        }
    }
}
export default About; 


