


const Button = ({text}:string) => {

    return(
        <button className={'button'}>{text ? text : 'I am button, click me and feel my wrath'}</button>
    )

}

export default Button; 
