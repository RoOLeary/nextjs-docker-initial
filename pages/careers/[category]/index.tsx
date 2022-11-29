import { useRouter } from 'next/router'
import Link from 'next/link'
import MainLayout from '../../../components/Globals/Layouts/MainLayout'
import StaticHeader from '../../../components/StaticHeader'


export default function Category() {


    const router = useRouter()
    const cat = router.query

    console.log(cat.category);

    return (
        <MainLayout>
            <StaticHeader content={cat ? cat.category : 'Job Category Listings'} />
            <section className="b-text c-section" id="learn-more">
                <div className="o-wrapper">
                    
                    <div className="o-grid__col l:o-grid__col--span-4">
                        <h2 className="b-text__heading">Category Intro</h2>
                        <p>Category text and clever marketing speak</p>
                    </div>
                    
                    <p>LIST HERE</p>
                
                </div>
                {/* <div>
                    {tagList}
                </div> */}
            </section>
            
        </MainLayout>
    )
  }
  