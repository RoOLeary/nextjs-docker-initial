import MainLayout from '../Components/Globals/Layouts/MainLayout';
import ContactForm from '../Components/ContactForm/ContactForm';
import { useRouter } from 'next/router'; 

export default function Contact() {

    const { locale } = useRouter(); 


    return(
        <MainLayout>
        <div className={'contact'}>
     
            <p>Contact Us</p>
            <ContactForm />
        </div>
        </MainLayout>

    )

}
