import React from 'react';
import { useEffect } from 'react';
import Link from 'next/link';
import FaqLayout from './FaqLayout';
import FaqItem from './FaqItem'; 
import { IFaqs } from '../../interfaces/IFaq'

const Faq = () => {

    // const { faqHeading, faqLeadtext } = content;
    
    let faqs = [
        {
          "question": "What is the meaning of this?",
          "answer": "Portland 90's scenester vexillologist forage post-ironic asymmetrical, chartreuse disrupt butcher paleo intelligentsia pabst before they sold out four loko. 3 wolf moon brooklyn."
        },
        {
          "question": "Does anyone know how to get to the bright side?",
          "answer": "Coloring book flannel truffaut craft beer drinking vinegar sartorial, disrupt fashion axe normcore meh butcher."
        },
        {
          "question": "Where will the series be taking place?",
          "answer": "Algarve in Portugal. Portland 90's scenester vexillologist forage post-ironic asymmetrical, chartreuse disrupt butcher paleo intelligentsia pabst before they sold out four loko. 3 wolf moon brooklyn."
        }
    ]

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
    return (
        <section className="b-faq c-section js-faq">
            <div className="o-wrapper">
                <div className="o-grid o-grid--gap-xxl l:o-grid--reverse">
                    <div className="o-grid__col l:o-grid__col--span-4">
                        <div className="c-section__sticky">
                            <h2 className="c-section__heading">{'ASK ME ANYTHING?'}</h2>
                            <div className="c-formatted c-section__text">
                                {'We’re here to help you find the answers to your questions.'}
                            </div>
                            <div className="c-section__cta">
                                <Link href={'/contact'} className="c-button c-button--primary">CONTACT</Link>
                            </div>
                        </div>
                    </div>
                    <div className="o-grid__col l:o-grid__col--span-8">
                        <ul className="b-faq__list">
                            {faqs.map((faq, i) => {
                                return(
                                    <FaqItem key={i} faq={faq} onClick={(e: any) => onQuestionClick(e)} />
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Faq;