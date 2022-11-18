import MainLayout from '../components/Globals/Layouts/MainLayout'

const About = ({entry, preview}) => {


    console.log(preview);
    
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

export const getStaticProps = async ( context ) => {
    
    const slug = context?.params?.slug || "about";
    
    console.log(context, 'slug');
    
    const res = await fetch(`https://servd-test-staging.cl-eu-west-3.servd.dev/api/pages/${slug}.json`);
    //     {
    //         credentials: "include",
    //         headers: {
    //             "Access-Control-Allow-Origin" : "*", 
    //             "Access-Control-Allow-Credentials" : true
    //         },
    //     }
    // );
    
    let entry = await res.json();
    
    const preview = context.preview;
    const previewData = context.preview;

    

    return {
        props: {
            entry: entry
        }
    }
}
export default About; 


