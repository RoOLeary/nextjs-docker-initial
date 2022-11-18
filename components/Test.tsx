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
    headingText ? headingText : null
    return <Heading primary>{headingText}</Heading>;

}

export default Test; 