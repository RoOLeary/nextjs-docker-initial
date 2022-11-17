import Card from './Card'; 


const Cards = () => {

    return(
        <div className={'cardsListContainer'}>

            <h3>Cards</h3>
            <p>Will output Recepies, products etc...basically whatever we want to pop into a card</p>

            <ul className={'cardsList_ul'}>
                <li><Card /></li>
                <li><Card /></li>
                <li><Card /></li>
                <li><Card /></li>
            </ul>
        </div>
    )

}

export default Cards; 
