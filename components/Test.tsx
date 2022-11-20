import styled from 'styled-components'; 


const Heading = styled.h1`
    font-size: 5em;
    display: flex; 
    align-items: left;
    color: ${props => props.primary ? "red" : "green"};
    text-transform: capitalize;
`

const headingText = 'This is just a heading'

const Test = ({ props }:any) => {
    // console.log(props);
    headingText ? headingText : null
    return (
        
        <section className="b-text c-section" id="learn-more">
            <div className="o-wrapper">
                <div className="o-grid o-grid--gap-xxl">
                    <Heading primary>{headingText}</Heading>
                </div>
            </div>
        </section>  
    );
}

export default Test; 