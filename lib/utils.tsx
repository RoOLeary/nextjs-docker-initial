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
        productImage: 'https://source.unsplash.com/280x180/?vegetables',
        price: '€3,50'
    },
    {
        id: 2,
        productName: 'Meat',
        productDescription: '/',
        productImage: 'https://source.unsplash.com/280x180/?meat',
        price: '€5,50'
    },
    {
        id: 3,
        productName: 'Coffee',
        productDescription: '/',
        productImage: 'https://source.unsplash.com/280x180/?coffee',
        price: '€4,50'
    },
    {
        id: 4,
        productName: 'Fruit',
        productDescription: '/',
        productImage: 'https://source.unsplash.com/280x180/?fruit',
        price: '€3,50'
    },
    {
        id: 5,
        productName: 'Frozen Meals',
        productDescription: '/',
        productImage: 'https://source.unsplash.com/280x180/?ice',
        price: '€3,50'
    },
    {
        id: 6,
        productName: 'Tomatoes',
        productDescription: '/',
        productImage: 'https://source.unsplash.com/280x180/?tomatoes',
        price: '€3,50'
    },
    {
        id: 7,
        productName: 'Cucumbers',
        productDescription: '/',
        productImage: 'https://source.unsplash.com/280x180/?cucumbers',
        price: '€3,50'
    },
    {
        id: 8,
        productName: 'Cola',
        productDescription: '/',
        productImage: 'https://source.unsplash.com/280x180/?cola',
        price: '€3,50'
    },
]




export const jobs: { id: number, jobCategory: string; jobImage: string, jobLink: string }[] = [
    {
        id: 1,
        jobCategory: 'Technology',
        jobImage: 'https://source.unsplash.com/280x120/?technology',
        jobLink: "technology",
    },
    {
        id: 2,
        jobCategory: 'Consumer Services',
        jobLink: "consumer-services",
        jobImage: 'https://source.unsplash.com/280x120/?consumer'
    },
    {
        id: 3,
        jobCategory: 'Driver',
        jobLink: "driver",
        jobImage: 'https://source.unsplash.com/280x120/?driver'
    },
    {
        id: 4,
        jobCategory: 'Runner',
        jobLink: "runner",
        jobImage: 'https://source.unsplash.com/280x120/?warehouse'
    },
    {
        id: 5,
        jobCategory: 'Shopper',
        jobLink: "shopper",
        jobImage: 'https://source.unsplash.com/280x120/?sales'
    },
    {
        id: 6,
        jobCategory: 'Head Office',
        jobLink: "head-office",
        jobImage: 'https://source.unsplash.com/280x120/?hq'
    },
    {
        id: 7,
        jobCategory: 'Sales',
        jobLink: "sales",
        jobImage: 'https://source.unsplash.com/280x120/?accounting'
    },
    {
        id: 8,
        jobCategory: 'Management',
        jobLink: "management",
        jobImage: 'https://source.unsplash.com/280x120/?management'
    },
]