import Link from 'next/link'
import Image from 'next/image'
import imageLoader from '../../../imageLoader'
import { useRouter } from 'next/router'
import { useRef, useEffect } from 'react'
import { LayoutGroup, motion } from 'framer-motion'
// import styles from '../styles/Nav.module.css'
import { isActiveLink } from '../../../lib/utils';
import styled from 'styled-components';

const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
`;

const UserImage = styled.img`
    border-radius: 50%;
`;

const links: { name: string; href: string }[] = [
    {
        name: 'How does it work',
        href: '/',
    },
    {
        name: 'Download app',
        href: '/download-app',
    },
    {
        name: 'About Picnic',
        href: '/about',
    },
    {
        name: 'FAQ',
        href: '/faqs',
    },
    {
        name: 'Careers',
        href: '/careers',
    },       
    {
        name: 'Store',
        href: '/webstore',
    },
    {
        name: 'Recipes',
        href: '/recipes',
    }
    // {
    //     name: 'Spaces',
    //     href: '/spaces',
    // },
]


const Nav = (): JSX.Element => {
    // const { data: session } = useSession();
    const router = useRouter()
    const menuRef = useRef(null);
    const unitRef = useRef(null);
    const mobTogglRef = useRef(null); 

    const toggleMobileMenu = (e) => {
        mobTogglRef.current.classList.toggle('mobile-menu-active');
        menuRef.current.classList.toggle('show');
    }

    const closeOnChange = (e) => {
        // console.log(mobTogglRef.current);
        setTimeout((e) => {
            mobTogglRef.current.classList.toggle('mobile-menu-active');
            menuRef.current.classList.toggle("show");
        }, 500)
    }

    const update = (height) => {
        const num = window.scrollY / height
        const multiplier = Math.min(Math.max(num, 0), 1)
        unitRef.current.style.setProperty('--multiplier', multiplier)
    }

    useEffect(() => {
        let height = unitRef.current.offsetHeight;
        window.addEventListener('scroll', () => update(height)); 
    }, []);

    return (
        <nav className={'c-nav js-nav t-dark'} ref={unitRef}>
            <div className={'c-nav__left'}>
                <Link href={`/`} className={"c-nav__logoLink"}>
                    <Image alt={'Logo'} src={'/assets/images/logo.svg'} width={50} height={50} loader={imageLoader} className={'_picnic_logo shake'}/>
                </Link>
            </div>
            <label className={'c-nav__mobileMenuToggle'} htmlFor="navMobileMenuToggle" ref={mobTogglRef} onClick={toggleMobileMenu}>
                <div></div>
                <div></div>
                <div></div>
            </label>
            <div className="c-nav__mobileMenu c-nav__right" ref={menuRef}>
                <LayoutGroup>
                <ul className="c-nav__menu">
                    {links.map(({ name, href }) => (
                        <li key={name} className="c-nav__menuItem">
                            <Link href={href} className={'c-nav__menuLink'} onClick={(e) => closeOnChange(e)}>
                                    {name}
                                    {isActiveLink(href, router.pathname) && (
                                        <motion.div
                                            layoutId="navigation-underline"
                                            className="navigation-underline"
                                            animate
                                        />
                                    )}
                            </Link>
                        </li>
                    ))}
                </ul>
                </LayoutGroup>
            </div>
            {/* {session && 
                <UserInfo>
                    <UserImage loader={imageLoader} src={session.user.image} width="44px" height="44px" className={''} />
                    <p>Signed in as {session.user.name}</p>
                </UserInfo>
            } */}
        </nav>
       
    )
}

export default Nav; 

