import Link from 'next/link';
import { useRouter } from 'next/router';

interface IRecipe {
    recipe?: any
    recipeTitle?: string
    recipeDescription?: string
    recipeImage?: string
}

const Recipe = ({ recipe }: IRecipe ) => {

    const { locale } = useRouter(); 
    // const data = locale.query;
    const { recipeTitle, recipeDescription, recipeImage } = recipe;
   
    return(
        <li className="o-grid__col xs:o-grid__col--span-6 m:o-grid__col--span-4 l:o-grid__col--span-3">
            <Link href={{
                    pathname: `recipes/${recipe.slug}`,
                    // query: data // the data
                }}>


                <article className="b-product" itemType="http://schema.org/Person" itemProp="performer">
                    <div className="b-product__photo">
                        <img alt={recipeTitle} className="b-product__photoImg" itemProp="image" loading="lazy" src={recipeImage ? recipeImage : 'https://placedog.net/280/180'} />
                    </div>
                    <div className="b-product__details">
                        <h3 className="b-product__name" itemProp="name">{recipe.title ? recipe.title : 'Recipe Name'}</h3>
                        <div className="b-product__role" itemProp="jobTitle">{recipeDescription}</div>
                    </div>
                </article>
            </Link>
        </li>
    )
}

export default Recipe;