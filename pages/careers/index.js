import MainLayout from '../../components/Globals/Layouts/MainLayout';
import StaticHeader from '../../components/StaticHeader';
import { useRouter } from 'next/router'; 

export default function Careers() {

    const { locale } = useRouter(); 
    return(
        <MainLayout>
            <StaticHeader content={'Careers List'} />
            <div className={'Careers'}>
                <p>Careers {locale} </p>
            </div>
        </MainLayout>
    )
}
