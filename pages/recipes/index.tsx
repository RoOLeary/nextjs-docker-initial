import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import imageLoader from '../../imageLoader';
import MainLayout from '../../components/Globals/Layouts/MainLayout';
import StaticHeader from '../../components/StaticHeader';
import { useRouter } from 'next/router'; 
import { GetStaticProps } from 'next'
import { ParsedUrlQuery } from 'querystring'

export default function Recipies(props) {
    const recipeList = props.page.data;
    const { locale } = useRouter(); 
    return(
        <>
            <Head>
                <title>Careers | PicNext Prototype</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <MainLayout>
                <div className={`c-static-header text-img-container`}>
                    <div className={`c-static-header text`}>
                        <h1 className={`c-static-header headline careers`}>Recipies</h1>
                    </div>
                    <div className={`c-static-header image`}>
                        <Image
                        alt={'imagetest'}
                        src={'/assets/images/recipies_hero_image.png'}
                        loader={imageLoader}
                        height={500}
                        width={600}
                        layout="responsive"
                        />
                    </div>
                </div>
             
                <StaticHeader content={'Recipies List'} />
                <section className="c-section" id="learn-more">
                    <div className="o-wrapper">
                        <div className="c-content">
                            <div className={'Recipies'}>
                                <p>Recipies {locale} </p>
                                <ul>
                                {recipeList ? recipeList.map((recipe, i) => {
                                    // console.log(recipe)
                                    return <li key={i}><Link href={`/recipes/${recipe.slug}`}>{recipe.title}</Link></li>  
                                }) : null}
                                </ul>            
                            </div>
                        </div>
                    </div>
                </section>
            </MainLayout>
        </>
    )
}



interface IParams extends ParsedUrlQuery {
    slug: string
}

export const getStaticProps: GetStaticProps = async ({ preview = false, previewData }) => {
  
    
    const res = await fetch(`https://servd-test-staging.cl-eu-west-3.servd.dev/api/recipes.json`);
    const data = await res.json();
  
    // console.log(data);
    
    return {
      props: {
          page: data
      },
      revalidate: 10
    };
  };