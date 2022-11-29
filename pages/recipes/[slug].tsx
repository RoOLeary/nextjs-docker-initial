import MainLayout from '../../components/Globals/Layouts/MainLayout'
import PageBlocks from '../../components/PageBlocks'
import StaticHeader from '../../components/StaticHeader'
import { GetStaticProps, GetStaticPaths } from 'next'
import { ParsedUrlQuery } from 'querystring'

const Recipe = ({ page, preview }:any) => {
    

  console.log(page);
  return(
    <MainLayout>
        {preview ? <h1>In Preview Mode</h1> : null}
        <StaticHeader content={page ? page.title : null} />
        <section className="c-section">
            <div className="o-wrapper">
                <div className="c-content">
                    <h1>{page ? page.title : null}</h1>
                    <p>{page ? page.articleBody : null }</p>
                </div>
            </div>
        </section>
    </MainLayout>
  )
}

interface IParams extends ParsedUrlQuery {
    slug: string
}

export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    const res = await fetch('https://servd-test-staging.cl-eu-west-3.servd.dev/api/recipes.json')
    const posts = await res.json()
    // console.log(posts.data);
    // Get the paths we want to pre-render based on posts
    const paths = posts.data.map((post) => ({
        params: { slug: post.slug },
    }))

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: "blocking" }
  }
  
export const getStaticProps: GetStaticProps = async ({ params, preview = false, previewData }) => {
    // console.log(params.slug);
    const slug = params.slug;
    // console.log(slug);
    const res = await fetch(`https://servd-test-staging.cl-eu-west-3.servd.dev/api/recipes/${params.slug}.json`)
    const post = await res.json()
    let prevData; 

    if(preview){
        // console.log('previewData', previewData)    
        const prevResponse = await fetch(`https://servd-test-staging.cl-eu-west-3.servd.dev/api/recipes/${params.slug}.json?token=${previewData['token']}`);
        prevData = await prevResponse.json();
        
    } 

    let page = preview ? prevData : post;

    return {
        props: {
            preview: preview ? true : false,
            page: post
        },
        revalidate: 10, // In seconds
      };
}

export default Recipe; 

