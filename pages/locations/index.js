import MainLayout from '../../components/Globals/Layouts/MainLayout';
import StaticHeader from '../../components/StaticHeader';

export default function Locations() {
    return(
        <MainLayout>
            <StaticHeader content={'Locations List'} />
            <div className={'locations'}>
                <p>Locations</p>
            </div>
        </MainLayout>
    )

}

