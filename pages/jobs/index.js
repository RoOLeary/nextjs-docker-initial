import MainLayout from '../../components/Globals/Layouts/MainLayout';
import StaticHeader from '../../components/StaticHeader';

export default function Jobs() {
    return(
        <MainLayout>
            <StaticHeader content={'Jobs List'} />
            <div className={'jobs'}>
                <p>Jobs List</p>
            </div>
        </MainLayout>
    )
}

