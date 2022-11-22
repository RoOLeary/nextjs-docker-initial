import MainLayout from '../../../components/Globals/Layouts/MainLayout';
import StaticHeader from '../../../components/StaticHeader';

export default function Category() {
    return(
        <MainLayout>
            <StaticHeader content={'Job Category List'} />
            <div className={'Job Category'}>
                <p>Category List</p>
            </div>
        </MainLayout>
    )
}