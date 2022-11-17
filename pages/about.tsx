import MainLayout from '../components/Globals/Layouts/MainLayout'

const About = ({entry}) => {


    console.log(entry);
    
    return(
        <MainLayout>
            
            <h1>{entry.title}</h1>
            <p>Just a scratch about page, nothing to see here yet</p>


        </MainLayout>

    )

}


export const getStaticProps = async (context) => {
    const slug = context?.params?.slug || "about";
    // console.log(context.params);
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
    // console.log(entry);
    const preview = context.preview;
    const previewData = context.preview;

    console.log(preview);

    return {
        props: {
            entry: entry
        }
    }
}
export default About; 