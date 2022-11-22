import Link from 'next/link';
import { useRouter } from 'next/router'

interface IJob {
    job?: any
    jobCategory?: string
    jobImage?: string
    jobLink?: string
}

const Job = ({ job }: IJob ) => {
    
    const { jobCategory, jobImage, jobLink } = job;
    const { locale } = useRouter();

    return(
       
        <li className="o-grid__col xs:o-grid__col--span-6 m:o-grid__col--span-4 l:o-grid__col--span-3">
            <Link href={`/${locale}/careers/${jobLink}`}>
                <article className="b-job" itemType="http://schema.org/Person" itemProp="performer">
                    <div className="b-job__photo">
                        <img alt={jobCategory} className="b-job__photoImg" itemProp="image" loading="lazy" src={jobImage} />
                    </div>
                    <div className="b-job__details">
                        <h3 className="b-job__name text-center" itemProp="name">{jobCategory}</h3>         
                    </div>
                </article>
            </Link>
        </li>
    )
}

export default Job;