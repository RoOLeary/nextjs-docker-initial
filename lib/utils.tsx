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
        jobLink: "/customer-success",
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



export const faqs: { question: string, answer: string; }[] = [

    {
        "question": "How does the queue work?",
        "answer": "If you create an account with us and you live in a postal code that falls within our delivery area, we will of course prefer to visit you the next day. \n Still, you first get in the queue. We do this so that we can expand in small steps and everyone always receives the very best service. Fortunately, once there, never again in line!"
    },
    {
        "question": "How do I place an order and pay?",
        "answer": "Once you have access to the app, you can start shopping. "
    },
    {
        "question": "How do I know if the products are fresh?",
        "answer": "This is just some dummy text, as the actual answers are rather long"
    },
    {
        "question": "Until what time can I place my order for tomorrow?",
        "answer": "This is just some dummy text, as the actual answers are rather long"
    },
    {
        "question": "Can I still add and remove products after I have already ordered?",
        "answer": "This is just some dummy text, as the actual answers are rather long"
    },
    {
        "question": "Can I still change my delivery time?",
        "answer": "This is just some dummy text, as the actual answers are rather long"
    },
    {
        "question": "Is there a minimum order amount?",
        "answer": "This is just some dummy text, as the actual answers are rather long"
    },
    {
        "question": "How long are promotions valid?",
        "answer": "This is just some dummy text, as the actual answers are rather long"
    },
    {
        "question": "What are the delivery times?",
        "answer": "This is just some dummy text, as the actual answers are rather long"
    },
    {
        "question": "Can someone under the age of 18 take an order?",
        "answer": "This is just some dummy text, as the actual answers are rather long"
    },
    {
        "question": "What if I am not at home when the delivery person rings the doorbell?",
        "answer": "This is just some dummy text, as the actual answers are rather long"
    },
    {
        "question": "Is it intended to tip the delivery driver?",
        "answer": "This is just some dummy text, as the actual answers are rather long"
    },
    {
        "question": "Can I return deposit bottles and bags?",
        "answer": "This is just some dummy text, as the actual answers are rather long"
    },
    {
        "question": "Can I return my glass to Picnic?",
        "answer": "This is just some dummy text, as the actual answers are rather long"
    },
    {
        "question": "What else do you recycle?",
        "answer": "This is just some dummy text, as the actual answers are rather long"
    },
    {
        "question": "Do you take back return packages from other webshops?",
        "answer": "This is just some dummy text, as the actual answers are rather long"
    },
    {
        "question": "What if there is something wrong with a product I ordered?",
        "answer": "This is just some dummy text, as the actual answers are rather long"
    },
    {
        "question": "Why do I have to log in with an SMS code?",
        "answer": "This is just some dummy text, as the actual answers are rather long"
    },
    {
        "question": "What about my right of withdrawal?",
        "answer": "This is just some dummy text, as the actual answers are rather long"
    },
    {
        "question": "Is my data safe with you?",
        "answer": "This is just some dummy text, as the actual answers are rather long"
    },
    {
        "question": "How and when can I reach you?",
        "answer": "This is just some dummy text, as the actual answers are rather long"
    }
]