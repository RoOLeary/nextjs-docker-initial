import { useRouter } from 'next/router';


export default function ForgotPassWord() {
    const { locale } = useRouter();

    // console.log(locale)
        
    return(

        <div className={'forgotten-password'}>
            <p>Blah blah blah</p>
            {locale && locale == 'nl' ? <p>Whoops - Wachtwoord Vertegen</p> : null}
            {locale && locale == 'de' ? <p>Passwort vergessen</p> : null}
            {locale && locale == 'fr' ? <p>Mot de passe oublié</p> : null}
        </div>
    )

}


