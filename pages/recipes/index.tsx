import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import imageLoader from '../../imageLoader';
import MainLayout from '../../components/Globals/Layouts/MainLayout';
import StaticHeader from '../../components/StaticHeader';
import Recipe from '../../components/Recipes/Recipe';
import { useRouter } from 'next/router'; 
import { GetStaticProps } from 'next'

export default function Recipies(props) {
    const recipeList = props.page.data;
    const { locale } = useRouter(); 
    console.log(locale);
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
                                <p>Recipies {locale ? `locale: ${locale}` : ''}</p>
                                <ul className={'b-products__list o-grid o-grid--gap-m'}>
                                {recipeList && recipeList.map((recipe, i) => {
                                    // console.log(recipe)
                                    return( <Recipe recipe={recipe} key={i} /> );  
                                })}
                                </ul>            
                            </div>
                        </div>
                    </div>
                </section>
            </MainLayout>
        </>
    )
}

export const getStaticProps: GetStaticProps = async (params) => {
  
    let url;
	if(params.locale == 'nl'){
		url = `https://servd-test-staging.cl-eu-west-3.servd.dev/api/${params.locale}/recipes.json`;
	} else {
		url = `https://servd-test-staging.cl-eu-west-3.servd.dev/api/recipes.json`;
	}
    const res = await fetch(url);
    const data = await res.json();
    
    return {
      props: {
          page: data
      },
      revalidate: 10
    };
  };