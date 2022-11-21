import Job from '../Jobs/Job';


interface IJobs {
    heading?: string
    jobsintro?: string   
    jobs?: Array<any>
}

const Jobs = ({ heading, jobsintro, jobs }: IJobs ) => { 

    let introText = jobsintro ? jobsintro : 'Holding text';
    return(
        <section className="b-jobs c-section jobs">
            <div className="o-wrapper">
                <h1>{heading ? heading : 'jobs' }</h1>
                <br />
                {introText.replace(/<\/?p[^>]*>/g, '')}
                <br />
                <div>
                <br />
                <ul className={'b-jobs__list o-grid o-grid--gap-m'}>
                    {jobs.length >= 0 && jobs.map((job, i) => {
                        return <Job key={i} job={job} />
                    })}
                </ul>
                </div>
            </div>
            
        </section>
    )
}

export default Jobs;