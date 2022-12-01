import MainLayout from '../../components/Globals/Layouts/MainLayout'
import PageBlocks from '../../components/PageBlocks'
import StaticHeader from '../../components/StaticHeader'
import { GetStaticProps, GetStaticPaths } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { useRouter } from 'next/router';

const Recipe = ({ page, preview }:any) => {
    

  const { locale } = useRouter();


  return(
    <MainLayout>
        {preview ? <h1>In Preview Mode</h1> : null}
        <StaticHeader content={page ? page.title : null} />
        <section className="c-section">
            <div className="o-wrapper">
                <div className="c-content">
                    <h1>{page ? page.title : null}</h1>
                    <p dangerouslySetInnerHTML={{__html: page ? page.articleBody : null }} />
                </div>
            </div>
        </section>
    </MainLayout>
  )
}

interface IParams extends ParsedUrlQuery {
    slug: string
}

export async function getStaticPaths(params) {
    // Call an external API endpoint to get posts
    // console.log(params);
	  const url = `https://servd-test-staging.cl-eu-west-3.servd.dev/api/recipes.json`;
   
    const res = await fetch(url);
    const posts = await res.json()
    // Get the paths we want to pre-render based on posts
    const paths = posts && posts.data.map((post) => ({
        params: { slug: post.slug },
    }));

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: true }
  }
  
export const getStaticProps: GetStaticProps = async ({ locale, params, preview = false, previewData }) => {
    
    // console.log(locale);
    // console.log('locale', locale);

    let url;
    if(locale == 'nl'){
      url = `https://servd-test-staging.cl-eu-west-3.servd.dev/api/nl/recipes/${params.slug}.json`;
    } else {
      url = `https://servd-test-staging.cl-eu-west-3.servd.dev/api/recipes/${params.slug}.json`;
    }
    const res = await fetch(url)
    const post = await res.json()
    let prevData; 

    if(preview){
       
        const prevResponse = await fetch(`https://servd-test-staging.cl-eu-west-3.servd.dev/api/${locale}/recipes/${params.slug}.json?token=${previewData['token']}`);
        prevData = await prevResponse.json();
        
    } 

    let page = preview ? previewData : post;

    return {
        props: {
            preview: preview ? true : false,
            page: post
        },
        revalidate: 10, // In seconds
      };
}

export default Recipe; 

