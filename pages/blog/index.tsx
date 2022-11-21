import MainLayout from '../../components/Globals/Layouts/MainLayout';
import StaticHeader from '../../components/StaticHeader';

export default function Blog() {
    return(
        <MainLayout>
            <StaticHeader content={'Blog List'} />
            <div className={'blog'}>
                <p>Blog/Article List</p>
            </div>
        </MainLayout>
    )

}

