import Head from 'next/head';
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
                <StaticHeader content={'Careers List'} />
                <div className={'Careers'}>
                    <p>Careers {locale} </p>
                </div>
            </MainLayout>
        </>
    )
}
