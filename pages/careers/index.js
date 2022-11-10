import { useRouter } from 'next/router'; 

export default function Careers() {

    const { locale } = useRouter(); 


    return(

        <div className={'faqs'}>
     
            <p>Careers List {locale}</p>
        </div>

    )

}


