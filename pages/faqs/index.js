import Head from 'next/head';
import MainLayout from '../../components/Globals/Layouts/MainLayout';
import StaticHeader from '../../components/StaticHeader';

export default function FAQs() {
    return(
        <>
            <Head>
                <title>PicNext Prototype | FAQs</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <MainLayout>
                <StaticHeader content={'FAQs List'} />
                <div className={'faqs'}>
                    <p>FAQs List</p>
                </div>
            </MainLayout>
        </>
    )

}
