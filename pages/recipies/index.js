import Head from 'next/head';
import Image from 'next/image';
import imageLoader from '../../imageLoader';
import MainLayout from '../../components/Globals/Layouts/MainLayout';
import StaticHeader from '../../components/StaticHeader';
import { useRouter } from 'next/router'; 

export default function Recipies() {

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
                <div className={'Recipies'}>
                    <p>Recipies {locale} </p>


                    <h3>Featured</h3>

                    <h3>User Submitted</h3>
                </div>
            </MainLayout>
        </>
    )
}