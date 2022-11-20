import Head from 'next/head';
import MainLayout from '../../components/Globals/Layouts/MainLayout';
import StaticHeader from '../../components/StaticHeader';
import { useRouter } from 'next/router'; 
import Products from '../../components/Products/Products'
import { products } from './../../lib/utils';

export default function WebStore() {

    const { locale } = useRouter(); 
    return(
        <>
            <Head>
                <title>Store | PicNext Prototype</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <MainLayout>
                <StaticHeader content={'WebStore'} />
                <div className={'WebStore'}>
                    <Products heading={'Featured Products'} productsintro={'blah blah blah'} products={products} />
                </div>
            </MainLayout>
        </>
    )
}
