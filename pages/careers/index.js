import MainLayout from '../../components/Globals/Layouts/MainLayout';
import { useRouter } from 'next/router'; 

export default function Careers() {

    const { locale } = useRouter(); 


    return(
        <MainLayout>
        <div className={'careers'}>
     
            <p>Careers List {locale}</p>
        </div>
        </MainLayout>

    )

}


