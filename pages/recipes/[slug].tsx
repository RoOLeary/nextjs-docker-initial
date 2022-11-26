import MainLayout from '../../components/Globals/Layouts/MainLayout'
import PageBlocks from '../../components/PageBlocks'
import StaticHeader from '../../components/StaticHeader'
import { GetStaticProps, GetStaticPaths } from 'next'

const Recipe = ({ post, preview }:any) => {

const { title } = post;
    
  return(
    <MainLayout>
      {preview ? <h1>In Preview Mode</h1> : null}
      <StaticHeader content={title} />
      <h1>{post.title}</h1>
      <p>{post.articleBody}</p>
    </MainLayout>
  )
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
    return { paths, fallback: true }
  }
  

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { slug } = params.slug as IParams // no longer causes error
    const res = await fetch(`https://servd-test-staging.cl-eu-west-3.servd.dev/api/recipes/${params.slug}.json`)
    const post = await res.json()
    return { props: { post } }
} 

export default Recipe; 

