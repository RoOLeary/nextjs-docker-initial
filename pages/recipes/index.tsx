import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import imageLoader from '../../imageLoader';
import MainLayout from '../../components/Globals/Layouts/MainLayout';
import StaticHeader from '../../components/StaticHeader';
import Recipe from '../../components/Recipes/Recipe';
import { useRouter } from 'next/router'; 
import { GetStaticProps, GetServerSideProps } from 'next'
import { ParsedUrlQuery } from 'querystring'

export default function Recipies(props) {
    
    let recipeList  = props.page.data ? props.page.data : null

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
                        <h1 className={`c-static-header headline careers`}>Recipes</h1>
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
             
                <StaticHeader content={'Recipes List'} />
                <section className="c-section" id="learn-more">
                    <div className="o-wrapper">
                        <div className="c-content">
                            <div className={'Recipies'}>
                                <p>Recipies {locale && `locale: ${locale}`}</p>
                                <ul className={'b-products__list o-grid o-grid--gap-m'}>
                                {recipeList ? recipeList.map((recipe, i) => {
                                    // console.log(recipe)
                                    return( <Recipe recipe={recipe} key={i} /> );  
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

export const getServerSideProps: GetServerSideProps = async ({ locale, context }:any) => {
    
    const res = await fetch(`https://servd-test-staging.cl-eu-west-3.servd.dev/api/${locale}/recipes.json`);
    const data = await res.json();

    return {
      props: {
          page: data
      },
    //   revalidsate: 10
    };
  };