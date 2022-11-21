import Head from 'next/head';
import Image from 'next/image';
import imageLoader from '../../imageLoader';
import MainLayout from '../../components/Globals/Layouts/MainLayout';
import StaticHeader from '../../components/StaticHeader';
import { useRouter } from 'next/router'; 

export default function Careers() {

    const { locale } = useRouter(); 
    return(
        <>
            <Head>
                <title>Careers | PicNext Prototype</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <MainLayout>
                <div>
                    <Image
                    alt={'imagetest'}
                    src={'/assets/images/bg_image_jobs.png'}
                    loader={imageLoader}
                    height={500}
                    width={600}
                    layout="responsive"
                    
                    />
                </div>
                <StaticHeader content={'Careers List'} />
                <div className={'Careers'}>
                    <p>Careers {locale} </p>
                </div>
            </MainLayout>
        </>
    )
}
