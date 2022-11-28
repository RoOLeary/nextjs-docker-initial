export const isActiveLink = (href: string, currentPathname: string): boolean => {
    if (href === '/') {
        return href === currentPathname
    }

    return currentPathname.startsWith(href)
}


export const products: { id: number, productName: string; productDescription: string, productImage: string,  price: string }[] = [
    {
        id: 1,
        productName: 'Vegetables',
        productDescription: '/',
        productImage: 'assets/images/basket.jpeg',
        price: '€3,50'
    },
    {
        id: 2,
        productName: 'Meat',
        productDescription: '/',
        productImage: 'assets/images/basket2.jpeg',
        price: '€5,50'
    },
    {
        id: 3,
        productName: 'Coffee',
        productDescription: '/',
        productImage: 'assets/images/basket.jpeg',
        price: '€4,50'
    },
    {
        id: 4,
        productName: 'Fruit',
        productDescription: '/',
        productImage: 'assets/images/fruit.jpeg',
        price: '€3,50'
    },
    {
        id: 5,
        productName: 'Frozen Meals',
        productDescription: '/',
        productImage: 'assets/images/basket.jpeg',
        price: '€3,50'
    },
    {
        id: 6,
        productName: 'Tomatoes',
        productDescription: '/',
        productImage: 'assets/images/basket2.jpeg',
        price: '€3,50'
    },
    {
        id: 7,
        productName: 'Cucumbers',
        productDescription: '/',
        productImage: 'assets/images/fruit.jpeg',
        price: '€3,50'
    },
    {
        id: 8,
        productName: 'Cola',
        productDescription: '/',
        productImage: 'assets/images/basket.jpeg',
        price: '€3,50'
    },
]




export const jobs: { id: number, jobCategory: string; jobImage: string, jobLink: string }[] = [
    {
        id: 1,
        jobCategory: 'Commercial',
        jobImage: 'assets/images/commercial.jpg',
        jobLink: "/commercial",
    },
    {
        id: 2,
        jobCategory: 'Customer Success',
        jobLink: "/customer-sucsess",
        jobImage: 'assets/images/customer-success.webp'
    },
    {
        id: 3,
        jobCategory: 'Construction & Real Estate',
        jobLink: "/construction-real-estate",
        jobImage: 'assets/images/commercial.jpg'
    },
    {
        id: 4,
        jobCategory: 'Creative',
        jobLink: "/creative",
        jobImage: 'assets/images/creative.jpg'
    },
    {
        id: 5,
        jobCategory: 'Internships',
        jobLink: "/internships",
        jobImage: 'assets/images/internships.jpg'
    },
    {
        id: 6,
        jobCategory: 'Facilities & Admin',
        jobLink: "/facilities-admin",
        jobImage: 'assets/images/facilities.webp'
    },
    {
        id: 7,
        jobCategory: 'Strategy & Analytics',
        jobLink: "/strategy-analytics",
        jobImage: 'assets/images/strategy.webp'
    },
    {
        id: 8,
        jobCategory: 'People & Finance',
        jobLink: "people-finance",
        jobImage: 'assets/images/people.webp'
    },
]