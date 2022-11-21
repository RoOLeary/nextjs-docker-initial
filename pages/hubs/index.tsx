import MainLayout from '../../components/Globals/Layouts/MainLayout';
import StaticHeader from '../../components/StaticHeader';

export default function Hubs() {
    return(
        <MainLayout>
            <StaticHeader content={'FAQs List'} />
            <div className={'faqs'}>
                <p>Hubs List</p>
            </div>
        </MainLayout>
    )

}

