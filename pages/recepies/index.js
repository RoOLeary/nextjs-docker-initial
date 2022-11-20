import MainLayout from '../../components/Globals/Layouts/MainLayout';
import StaticHeader from '../../components/StaticHeader';

export default function Recepies() {
    return(
        <MainLayout>
            <StaticHeader content={'Recepies List'} />
            <div className={'recepies'}>
                <p>Recepies List</p>
            </div>
        </MainLayout>
    )

}
