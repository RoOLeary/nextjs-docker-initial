


const Button = (text) => {

    return(
        <div>
            <h3>Simple Button</h3>
            <button className={'button'}>{text ? text : 'I am button, click me and feel my wrath'}</button>
        </div>
    )

}

export default Button; 
