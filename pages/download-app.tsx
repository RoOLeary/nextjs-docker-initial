import MainLayout from '../components/Globals/Layouts/MainLayout'
import Image from 'next/image';
import imageLoader from './../imageLoader';

const DownLoadApp = () => {

    return(

        <MainLayout>
           <div>
                <Image
                alt={'imagetest'}
                src={'/assets/images/picnic.jpeg'}
                loader={imageLoader}
                height={500}
                width={600}
                layout="responsive"
                
                />
                <div className="o-wrapper">
                    <div>
                        <h1>Download the app</h1>
                        <p>In the free Picnic app you can do all the shopping you need within a few minutes. From A-brand to private label, from fresh vegetables to shampoo. From 35 euros we will deliver everything for free!</p>
                    </div>
                </div>
            </div>
            <section className="b-text c-section" id="about">
                <div className="o-wrapper">
                    <div>
                        <h1>Download the app</h1>
                        <p>In the free Picnic app you can do all the shopping you need within a few minutes. From A-brand to private label, from fresh vegetables to shampoo. From 35 euros we will deliver everything for free!</p>
                    </div>
                </div>
            </section>

        </MainLayout>

    )


}
export default DownLoadApp; 