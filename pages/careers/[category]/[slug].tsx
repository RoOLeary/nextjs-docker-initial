import { useRouter } from 'next/router'
import Link from 'next/link'
import MainLayout from '../../../components/Globals/Layouts/MainLayout'
import StaticHeader from '../../../components/StaticHeader'


export default function Category() {


    const router = useRouter()
    const slug = router.query
    console.log(slug);
    
    return (
        <MainLayout>
            <StaticHeader content={'Job Title'} />
            <section className="b-text  c-section" id="learn-more">
                <div className="o-wrapper">
                    <div className="o-grid o-grid--gap-xxl">
                        <div className="o-grid__col l:o-grid__col--span-4">
                            <h2 className="b-text__heading">Job title and information</h2>
                        </div>
                        <div className="o-grid__col l:o-grid__col--span-8">
                            <div className={"c-formatted"}>Job detail here. </div>        
                        </div>
                    </div>
                </div>
                {/* <div>
                    {tagList}
                </div> */}
            </section>
            
        </MainLayout>
    )
  }
  