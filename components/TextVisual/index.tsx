<<<<<<< HEAD
const TextVisual = () =>{
    return(
        <p>TV stuff</p>
    )

}

export default TextVisual 
=======
import React from 'react';
import Link from 'next/link'
import Image from 'next/image';
import imageLoader from '../../imageLoader'
// import styles from '../styles/TextVisual.module.css';

type ITextVisual = {
    textVisualHeading: string
    textVisualContent: string
    textVisualImage: string
    link?: string
    linkText?: string
}

const TextVisual = (): JSX.Element => {

    return (
        <section className="b-textImage b-textImage--tint b-textVisual js-equinoxNode t-dark is-visible">
            <div className="b-textImage__imageContainer">
                <figure className="b-textImage__image">
                    <Image alt={'slt'} className="b-textImage__imageImg b-textImage__imageImg--background" src={'https://placedog.net/550/550'} loader={imageLoader} fill />
                </figure>
            </div>

            <div className="o-wrapper">
                <div className="b-textImage__text">
                    <h2 className="b-textImage__heading">{'heading'}</h2>
                    <p>{'bslfsfbafb'}</p>
                    <div className="b-blocks__ctas">
                       
                        <Link href={`#`} className="c-button c-button--inverted" legacyBehavior>Click</Link>
                       
                    </div>  
                </div>
            </div>
        </section>
    );
}

export default TextVisual

