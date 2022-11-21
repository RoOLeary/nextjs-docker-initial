import Head from 'next/head';
import Image from 'next/image';
import imageLoader from '../../imageLoader';
import MainLayout from '../../components/Globals/Layouts/MainLayout';
import StaticHeader from '../../components/StaticHeader';
import { useRouter } from 'next/router';
import Jobs from '../../components/Jobs/Jobs'
import { jobs } from './../../lib/utils'; 

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
                <div className={'WebStore'}>
                    <Jobs heading={'Careers'} jobsintro={'Work With Us'} jobs={jobs} />
                </div>
            </MainLayout>
        </>
    )
}
