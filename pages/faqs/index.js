import MainLayout from '../../components/Globals/Layouts/MainLayout';
import StaticHeader from '../../components/StaticHeader';

export default function FAQs() {
    return(
        <MainLayout>
            <StaticHeader content={'FAQs List'} />
            <div className={'faqs'}>
                <p>FAQs List</p>
            </div>
        </MainLayout>
    )

}
