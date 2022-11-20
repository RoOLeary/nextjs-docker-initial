
interface IProduct {
    product?: any
    productName?: string
    productDescription?: string
    productImage?: string
    price?: string
}

const Product = ({ product }: IProduct ) => {
    
    const { productName, productDescription, productImage, price } = product;
    // const { show, toggleVisibility } = useModal();

    return(
        <li className="o-grid__col xs:o-grid__col--span-3 m:o-grid__col--span-4 l:o-grid__col--span-3">
            <article className="b-product" itemType="http://schema.org/Person" itemProp="performer">
                
                <div className="b-product__photo">
                    <img alt={productName} className="b-product__photoImg" itemProp="image" loading="lazy" src={productImage} />
                </div>
                <div className="b-product__details">
                    <h3 className="b-product__name" itemProp="name">{productName}</h3>
                    <div className="b-product__role" itemProp="jobTitle">{productDescription}</div>
                    <p className="b-product__company" itemProp="worksFor">{price}</p>
                </div>
            </article>
        </li>
    )
}

export default Product;