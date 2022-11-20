import React, { Children, PropsWithChildren } from 'react';
import Header from './../Header';
import Hero from './../Hero';
import Faq from './../Faq/Faq';
import Test from './../Test'
import TextVisual from './../TextVisual'
import Video from './../Video'

// import Head from 'next/head'
// import Faq from './../Faq/Faq'
// import Hero from './../Hero'
// import BoxedImage from './../BoxedImage'
// import Button from './../Button'
// import Cards from './../Cards/Cards'
// import Contact from './../Contact/Contact'
// import CTA from './../CTA/CTA'
// import Chapters from './../Chapters/Chapters'
// import MapComponent from './../Map/MapComponent'
// import MiniBanner from './../MiniBanner'
// import Note from './../Note'


import IBlocks from '../../interfaces/IBlocks'

interface IProps {
    id?:number,
    content: IBlocks[];
}

function renderContent(content){
    
    // get the pageBlocks. get content object, map over each block and then run a switch statement
    // to loop over the various components and pass in the appropriate data types
    // this can be further extrapolated with a generic component, but is out of initial scope
    
    const pageBlocksList = content ? Object.entries(content).map((block: any, id: number) => {

        const blockContent = block[1];
        
        switch(blockContent['blockType']) {
            case 'header':
                return (
                    <Header key={block[1]['uid']} headline={blockContent['headline']}  />
                );
            case 'hero':
                return (
                    <Hero 
                        key={block[1]['uid']} 
                        eyebrow={blockContent['eyebrow']} 
                        heading={blockContent['heading']}
                        subHeading={blockContent['subHeading']} 
                    />
                );
            // case 'text':
            //     return <Text key={block[1]['uid']} content={blockContent} />
            // case 'textVisual':
            //     return (
            //         <TextVisual 
            //             key={block[1]['uid']}
            //             textVisualHeading={blockContent['textVisualHeading']}
            //             textVisualContent={blockContent['textVisualContent']}
            //             textVisualImage={blockContent['textVisualImage']} 
            //     />);
            // case 'imageSlider':
            //     return <Slider key={block[1]['uid']} content={blockContent} />
            case 'faq':
                return  (
                    <Faq key={block[1]['uid']} content={blockContent} />
                );
            case 'video':
                return (
                    <Video 
                        key={block[1]['uid']} 
                        heading={blockContent['heading']}
                        videoEmbedCode={blockContent['videoEmbedCode']} 
                    />
                );
            // case 'products':
            //     return (
            //         <Products 
            //             key={block[1]['uid']} 
            //             heading={blockContent['heading']} 
            //             productinfo={blockContent['productinfo']} 
            //             produucts={blockContent['produucts']} 
            //         />
            //     )
            // case 'signup':
            //     return (
            //         <Signup 
            //             key={block[1]['uid']} 
            //             signupHeading={blockContent['signupHeading']} 
            //             signupText={blockContent['signupText']} 
            //             hubspotEmbed={blockContent['hubspotEmbed']}
            //         />
            //     ); 
            // case 'blocks':
            //     return (
            //         <Blocks 
            //             key={block[1]['uid']} 
            //             uid={blockContent['uid']} 
            //             text1={blockContent['text1']}
            //             text2={blockContent['text2']}
            //             heading1={blockContent['heading1']}
            //             heading2={blockContent['heading2']}
            //             ctas1={blockContent['ctas1']}
            //             ctas2={blockContent['ctas2']}
            //             image1={blockContent['image1']}
            //             image2={blockContent['image2']}
            //         />
            //     ); 
            // case 'tickets':
            //     return <Tickets key={block[1]['uid']} content={blockContent} />
            default:
                return(
                    <>
                        <div key={id}>
                            <h3>{block[1]['blockType']}</h3>
                            <pre>{JSON.stringify(block, null, 2)}</pre>
                        </div>
                    </>
                )
        }
        
    }) : null;

    return pageBlocksList;
}

const PageBlocks = ({ content }: IProps) => {
    return(
        <>
            {renderContent(content)}
        </>
    )
} 

export default PageBlocks;