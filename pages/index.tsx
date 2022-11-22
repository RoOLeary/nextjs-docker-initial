import { useState, useEffect } from 'react'
import Head from 'next/head'
import MainLayout from '../components/Globals/Layouts/MainLayout'
// import Faq from '../components/Faq/Faq'
// import Hero from '../components/Hero'
import BoxedImage from '../components/BoxedImage'
// import Button from '../components/Button'
// import Cards from '../components/Cards/Cards'
// // import Contact from '../components/Contact/Contact'
// import CTA from '../components/CTA/CTA'
// import Chapters from '../components/Chapters/Chapters'
// import MapComponent from '../components/Map/MapComponent'
// import MiniBanner from '../components/MiniBanner'
// import Note from '../components/Note'
import Test from '../components/Test'
import Text from '../components/Text'
import TextVisual from '../components/TextVisual'
import USPs from '../components/USPs'
// import Video from '../components/Video'
import { useTypingText } from '../hooks/useTypingText';
import Products from '../components/Products/Products'
import Link from 'next/link';
import { useScroll, useTransform, motion } from 'framer-motion';
import imageLoader from './../imageLoader';
import Image from 'next/image';
import { products } from './../lib/utils';

const Home = () => {
	
	const { word } = useTypingText(['Testing', 'To See', 'If This', 'works'], 250, 20);
	const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 300], [0, 200]);
    const y2 = useTransform(scrollY, [0, 300], [0, -100]);
    const y3 = useTransform(scrollY, [0, 300], [0, -50]);
    const y4 = useTransform(scrollY, [0, 750], [0, -250]);
    const y5 = useTransform(scrollY, [0, 400], [0, -250]);
    const x1 = useTransform(scrollY, [500, 0], [-250, 0]);
    const x2 = useTransform(scrollY, [750, 0], [150, 0]);
	// console.log(page.data[0].blocks);

	const dummyText = `Man, that guy is the Red Grin Grumbold of pretending he knows what's going on. Oh you agree huh? You like that Red Grin Grumbold reference? Well guess what, I made him up. You really are your father's children. Think for yourselves, don't be sheep.`;
	
	return (
		<>
		<Head>
			<title>PicNext Prototype</title>
			<link rel="icon" href="/favicon.ico" />
		</Head>
		<MainLayout>

		
		<main className={'main'}>
			<section className={"b-hero js-equinoxNode t-beige"}>
				<div className={"b-hero__grid"}>

				{/* <motion.figure
						className="b-hero__photo b-hero__photo--1"
						style={{ y: y2, x: 350 }}
					>
						<Image alt="photo1 - Audience member photo" loader={imageLoader} src={"https://source.unsplash.com/500x300/?apples"} sizes="20vh" width={200} height={200} unoptimized/>
	</motion.figure> */}
				<figure
					className="b-hero__photo b-hero__photo--2 shake homeHeader"
					// style={{ y: y3, x: x1 }}
				>
					<Image alt="photo2 - Speaker" className={`homeHeader`} loader={imageLoader} src={"../assets/images/picnic-app.png"} sizes="5vh" width={200} height={200}/>
				</figure> 
				
				
					{/* <motion.figure className="b-hero__photo b-hero__photo--3" style={{ y: y4, x: x2 }}>
						<Image alt="photo1 - Audience member photo" loader={imageLoader} src="https://placedog.net/550/550" sizes="100vw" fill />
					</motion.figure> */}
				{/* <motion.figure className={"b-hero__photo b-hero__photo--4"} style={{ y: y5, x: 0 }}>
					<Image alt="photo1 - Audience member photo" loader={imageLoader} src="https://source.unsplash.com/800x500/?picnic" sizes="100vw" fill />
				</motion.figure> */}
				<figure className={"b-hero__shape b-hero__shape--1"} id="dots"></figure>
				<figure className={"b-hero__shape b-hero__shape--2"} id="donut"></figure>
				<figure className={"b-hero__shape b-hero__shape--3"} id="bars"></figure>
				<figure className={"b-hero__shape b-hero__shape--4"} id="lines"></figure>

					<div className={"b-hero__content"}>
						<div className={"b-hero__contentInner"}>
							
							<h4 className={"b-hero__eyebrow"}>Lastly, you will read this.</h4>
							<h1 className={"b-hero__heading"}>Supermarkt op wielen</h1>
							<div className={"b-hero__intro"}>
								<p>Laagste Prijs Garantie</p>
							</div>
							<div className={"b-hero__cta"} style={{"display": "flex"}}>
								<Link href={"https://apps.apple.com/app/id1018175041"}><Image alt={'App Store'}src={'../assets/images/app-store-badge.svg'} loader={imageLoader} height={55} width={150}/></Link>
								<Link href={"https://play.google.com/store/apps/details?id=com.picnic.android&referrer=adjust_reftag%3Dc7L3Cu1Ahk76o%26utm_source%3Dpicnic.nl%2BInstalls%26utm_campaign%3Dnull%26utm_content%3Dapp-downloaden&pli=1"}><Image src={'../assets/images/google-play-badge.svg'} alt={"Play Store"} loader={imageLoader} height={50} width={150} /></Link>
							</div>
						</div>
					</div>
				</div>
			</section>
			<Products heading={'Products'} productsintro={'blah blah blah'} products={products} />
			{/* <Test color="primary"/> */}
			<Text heading={'Text Block Here'} column={dummyText} />
			<USPs />
			
		</main>
		</MainLayout>
		</>
	)
}


export default Home; 


