import { useRouter } from 'next/router'
import Link from 'next/link'
import MainLayout from '../../../components/Globals/Layouts/MainLayout'
import StaticHeader from '../../../components/StaticHeader'


export default function Category() {


    const router = useRouter()
    const slug = router.query
    console.log(slug);
    
    return (
        <Layout>
            <StaticHeader content={entry.headline} />
            <section className="b-text  c-section" id="learn-more">
                <div className="o-wrapper">
                    <div className="o-grid o-grid--gap-xxl">
                        <div className="o-grid__col l:o-grid__col--span-4">
                            <h2 className="b-text__heading">{entry.subHeadline}</h2>
                        </div>
                        <div className="o-grid__col l:o-grid__col--span-8">
                            <div className={"c-formatted"} dangerouslySetInnerHTML={{__html: entry.body }} />        
                        </div>
                    </div>
                </div>
                {/* <div>
                    {tagList}
                </div> */}
            </section>
            
        </Layout>
    )
  }
  