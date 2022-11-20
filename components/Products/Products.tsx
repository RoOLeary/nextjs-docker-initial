import Product from '../Products/Product';


interface IProducts {
    heading?: string
    productsintro?: string   
    products?: Array<any>
}

const Products = ({ heading, productsintro, products }: IProducts ) => { 
    
    console.log(products.length);

    let introText = productsintro ? productsintro : 'Holding text';
    return(
        <section className="b-faq c-section products">
            <div className="o-wrapper">
                <h1>{heading ? heading : 'Products' }</h1>
                <br />
                {introText.replace(/<\/?p[^>]*>/g, '')}
                <br />
                <div>
                <br />
                <ul className={'b-products__list o-grid o-grid--gap-m'}>
                    {products.length >= 0 && products.map((product, i) => {
                        return <Product key={i} product={product} />
                    })}
                </ul>
                </div>
            </div>
            
        </section>
    )
}

export default Products;