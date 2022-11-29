import { useEffect } from 'react';
import Head from 'next/head';
import MainLayout from '../../components/Globals/Layouts/MainLayout';
import StaticHeader from '../../components/StaticHeader';
import FaqItem from '../../components/Faq/FaqItem';
import { faqs } from './../../lib/utils'; 

const FAQs = () => {

    const selectorAnswerInner: any = '.js-faqAnswerInner';
    
    const onQuestionClick = (e: any) => {
        const question = e.target;
        const classNameIsExpanded = 'is-expanded';
        question.parentElement.classList.toggle(classNameIsExpanded);
    };

    useEffect(() => {
        document.querySelectorAll(selectorAnswerInner).forEach(answerInner => {
            answerInner.parentElement.style.setProperty('--height', answerInner.offsetHeight + 'px')
        })
    },[]);

    return(
        <>
            <Head>
                <title>PicNext Prototype | FAQs</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <MainLayout>
                <StaticHeader content={'FAQs List'} />
                <section className="c-section">
                    <div className="o-wrapper o-wrapper--narrow">
                        <div className={'faqs'}>
                            <ol className="b-faq__list">
                                {faqs.map((faq, i) => {
                                    return(
                                        <FaqItem key={i} faq={faq} onClick={(e: any) => onQuestionClick(e)} />
                                    )
                                })}
                            </ol>
                        </div>
                    </div>
                </section>
            </MainLayout>
        </>
    )

}

export default FAQs